import { useState, FormEvent, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { RoutePath, ContactInquiry } from '../types';
import { brand } from '../config/brand';
import { SpatialPageHeader } from '../components/common/SpatialPageHeader';
import { MaskedHeading, ScrollText } from '../components/common/ScrollMotion';
import { Terminal, Send, CheckCircle2, ShieldCheck, Mail, ArrowRight, Lock, CalendarDays, Clock3, ChevronDown, ChevronUp } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: RoutePath) => void;
}

function formatDateDisplay(value: string) {
  if (!value) return 'Select date';

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function formatTimeDisplay(value: string) {
  if (!value) return 'Select time';

  const [hourText, minuteText] = value.split(':');
  const hour = Number(hourText);
  const minutes = Number(minuteText);
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const normalizedHour = ((hour + 11) % 12) + 1;
  return `${String(normalizedHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

function toDisplayDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatIsoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function CustomDateField({
  value,
  min,
  onChange,
  required = true,
}: {
  value: string;
  min: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState<Date>(() => {
    if (!value) {
      const initial = new Date();
      return new Date(initial.getFullYear(), initial.getMonth(), 1);
    }

    const parsed = new Date(`${value}T00:00:00`);
    return new Date(parsed.getFullYear(), parsed.getMonth(), 1);
  });

  const minimumDate = new Date(`${min}T00:00:00`);
  const today = toDisplayDate(new Date());

  useEffect(() => {
    if (!value) return;

    const parsed = new Date(`${value}T00:00:00`);
    setCalendarMonth(new Date(parsed.getFullYear(), parsed.getMonth(), 1));
  }, [value]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const monthLabel = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(calendarMonth);

  const monthStart = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), 1);
  const monthEnd = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 0);
  const leadingDays = (monthStart.getDay() + 6) % 7;
  const totalCells = Math.ceil((leadingDays + monthEnd.getDate()) / 7) * 7;

  const calendarDays = Array.from({ length: totalCells }, (_, index) => {
    const date = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), index - leadingDays + 1);
    return date;
  });

  const canGoToPreviousMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1) >= new Date(minimumDate.getFullYear(), minimumDate.getMonth(), 1);

  const handleNavigateMonth = (direction: 'prev' | 'next') => {
    const nextMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + (direction === 'next' ? 1 : -1), 1);
    const minMonth = new Date(minimumDate.getFullYear(), minimumDate.getMonth(), 1);

    if (direction === 'prev' && nextMonth < minMonth) return;
    setCalendarMonth(nextMonth);
  };

  const handleDateSelect = (selectedDate: Date) => {
    if (selectedDate < minimumDate) return;

    onChange(formatIsoDate(selectedDate));
    setIsOpen(false);
  };

  const handleToday = () => {
    const todayDate = toDisplayDate(new Date());
    onChange(formatIsoDate(todayDate));
    setCalendarMonth(new Date(todayDate.getFullYear(), todayDate.getMonth(), 1));
    setIsOpen(false);
  };

  const handleClear = () => {
    onChange('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full z-10">
      <input
        ref={inputRef}
        type="date"
        required={required}
        min={min}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setIsOpen(false);
        }}
        className="absolute inset-0 h-full w-full opacity-0 pointer-events-none z-20"
        style={{ colorScheme: 'dark', WebkitAppearance: 'none', appearance: 'none' }}
      />

      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setCalendarMonth(value ? new Date(`${value}T00:00:00`) : new Date());
        }}
        className="relative z-10 w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors flex items-center justify-between gap-3 min-h-[52px]"
      >
        <span className="flex items-center gap-2 min-w-0 truncate">
          <CalendarDays className="w-4 h-4 text-[#e0fb2e] shrink-0" />
          <span className="truncate text-left">{formatDateDisplay(value)}</span>
        </span>
        <ChevronDown className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
      </button>

      {isOpen && (
        <div className="dark-date-popover absolute left-0 z-30 mt-2 w-[min(320px,calc(100vw-2rem))] min-w-[min(300px,calc(100vw-2rem))] max-w-[320px] overflow-hidden rounded-[12px] border border-white/8 bg-[#0d0d0d] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-[12px]">
          <div className="mb-3 flex w-full items-center justify-between gap-3">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => handleNavigateMonth('prev')}
              disabled={!canGoToPreviousMonth}
              className={`flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-150 ${canGoToPreviousMonth ? 'border-[#e0fb2e]/50 bg-[#e0fb2e]/5 text-[#e0fb2e] hover:scale-110' : 'border-white/5 bg-transparent text-white/20 cursor-not-allowed'}`}
            >
              <ChevronUp className="h-4 w-4" />
            </button>

            <div className="min-w-0 flex-1 text-center font-mono text-sm font-medium tracking-[0.08em] text-white uppercase">
              {monthLabel}
            </div>

            <button
              type="button"
              aria-label="Next month"
              onClick={() => handleNavigateMonth('next')}
              className="flex h-8 w-8 items-center justify-center rounded-md border border-[#e0fb2e]/50 bg-[#e0fb2e]/5 text-[#e0fb2e] transition-all duration-150 hover:scale-110"
            >
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-2 grid w-full grid-cols-7 gap-1 text-center text-[11px] font-mono uppercase tracking-[0.12em] text-[#c8f135]/60">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
              <span key={day} className="min-w-0 py-1">{day}</span>
            ))}
          </div>

          <div className="grid w-full grid-cols-7 gap-1">
            {calendarDays.map((date) => {
              const isoValue = formatIsoDate(date);
              const isOutsideMonth = date.getMonth() !== calendarMonth.getMonth();
              const isSelected = value === isoValue;
              const isTodayCell = formatIsoDate(toDisplayDate(date)) === formatIsoDate(today);
              const isDisabled = date < minimumDate;

              return (
                <button
                  key={`${isoValue}-${date.getDate()}`}
                  type="button"
                  onClick={() => handleDateSelect(date)}
                  disabled={isDisabled || isOutsideMonth}
                  className={`flex h-8 min-w-0 w-full items-center justify-center rounded-[6px] px-2 text-[13px] font-medium transition-all duration-150 ${
                    isOutsideMonth
                      ? 'cursor-default opacity-25 text-white/30'
                      : 'text-[#e5e5e5] hover:bg-white/7'
                  } ${
                    isSelected
                      ? 'bg-[#e0fb2e] text-[#000] shadow-[0_0_12px_rgba(224,251,46,0.5)]'
                      : ''
                  } ${
                    !isOutsideMonth && !isSelected && !isDisabled && isTodayCell
                      ? 'border border-[#e0fb2e]/40 bg-[#e0fb2e]/6'
                      : ''
                  } ${
                    isDisabled && !isOutsideMonth ? 'cursor-not-allowed opacity-35 text-white/40' : ''
                  }`}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex w-full items-center justify-between gap-3 border-t border-white/8 pt-3">
            <button
              type="button"
              onClick={handleToday}
              className="flex-1 rounded-lg border border-[#e0fb2e]/70 bg-[#e0fb2e]/8 px-3 py-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-[#e0fb2e] transition-colors hover:bg-[#e0fb2e]/14"
            >
              Today
            </button>

            <button
              type="button"
              onClick={handleClear}
              className="flex-1 rounded-lg border border-white/8 bg-transparent px-3 py-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.12em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function CustomTimeField({
  value,
  onChange,
  required = true,
}: {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = Array.from({ length: 49 }, (_, index) => {
    const totalMinutes = 9 * 60 + index * 15;
    if (totalMinutes > 21 * 60) return null;

    const hour24 = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const suffix = hour24 >= 12 ? 'PM' : 'AM';
    const hour12 = ((hour24 + 11) % 12) + 1;
    const valueString = `${String(hour24).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    const label = `${String(hour12).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${suffix}`;
    return { value: valueString, label };
  }).filter(Boolean) as { value: string; label: string }[];

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        aria-hidden="true"
      >
        <option value="">Select time</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors flex items-center justify-between gap-3 min-h-[52px]"
      >
        <span className="flex items-center gap-2 min-w-0 truncate">
          <Clock3 className="w-4 h-4 text-[#e0fb2e] shrink-0" />
          <span className="truncate text-left">{formatTimeDisplay(value)}</span>
        </span>
        <ChevronDown className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
      </button>

      {isOpen && (
        <div className="absolute z-20 left-0 right-0 mt-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-2xl overflow-hidden">
          <div className="max-h-64 overflow-y-auto p-2">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-colors ${
                  value === option.value
                    ? 'bg-[#e0fb2e] text-[#07060a] font-bold'
                    : 'text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)]'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState<ContactInquiry>({
    name: '',
    email: '',
    company: '',
    role: '',
    problemStatement: '',
    constraints: '',
    projectStage: 'Prototype / PoC',
    schedulingDate: '',
    schedulingTime: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const stageOptions = [
    'Exploring technical feasibility',
    'Forward Deployed Engineering Pod',
    'AI Implementation / Agentic Systems',
    'Vision & Edge AI Pipeline',
    'Complex Business Architecture / Modernization',
    'Document Intelligence / OCR',
    'Other Technical Roadblock'
  ];

  const schedulingTimeOptions = Array.from({ length: ((22 - 9) * 60 / 15) + 1 }, (_, index) => {
    const totalMinutes = 9 * 60 + index * 15;
    const hour24 = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const hour12 = ((hour24 + 11) % 12) + 1;
    const suffix = hour24 >= 12 ? 'PM' : 'AM';
    const value = `${String(hour24).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    const label = `${String(hour12).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${suffix}`;
    return { value, label };
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Unable to submit technical intake. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected network error occurred. Please try again or email us directly at info@nighthack.in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact-chapter" className="min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[var(--bg-base)] text-[var(--text-primary)] space-y-20">
      
      {/* 1. Spatial Page Header */}
      <SpatialPageHeader
        tag="FORWARD DEPLOYED ENGINEERING INTAKE"
        title="Bring us the"
        titleAccent="difficult problem."
        subtitle="Tell us what is blocked, manual, fragmented, or technically uncertain. We review every problem statement directly with our forward-deployed systems and AI engineers."
        ctaText="Submit Technical Problem"
        ctaRoute="/contact"
        secondaryCtaText="Explore Engineering Tracks"
        secondaryCtaRoute="/fde"
        onNavigate={onNavigate}
        telemetryItems={[
          { label: 'REVIEW', value: 'DIRECT SENIOR POD', color: '#e0fb2e' },
          { label: 'CONFIDENTIALITY', value: 'MUTUAL NDA READY', color: 'var(--text-primary)' },
          { label: 'DELIVERY', value: 'EMBEDDED POD MODEL', color: '#38bdf8' },
        ]}
      />

      {/* 2. Intake Form & Engineering Coordinates Grid */}
      <section className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[#e0fb2e]/40 space-y-6 text-center shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#e0fb2e] text-[#07060a] flex items-center justify-center mx-auto font-black shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
                    Inquiry Delivered to Engineering Pod
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, <strong className="text-[var(--text-primary)]">{formData.name}</strong>. Your technical problem dossier has been dispatched directly to <strong className="text-[var(--text-primary)]">info@nighthack.in</strong>. A forward-deployed engineer will review your problem statement and technical constraints and follow up at <strong className="text-[#e0fb2e]">{formData.email}</strong>.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-left text-xs font-mono space-y-1.5 text-[var(--text-secondary)]">
                  <div><span className="text-[var(--text-muted)]">Company:</span> {formData.company || 'Not specified'}</div>
                  <div><span className="text-[var(--text-muted)]">Engagement:</span> {formData.projectStage}</div>
                  <div><span className="text-[var(--text-muted)]">Scope:</span> {formData.problemStatement.slice(0, 100)}...</div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-[var(--bg-surface-elevated)] hover:bg-[var(--border-color)] text-xs font-mono text-[var(--text-primary)] border border-[var(--border-color)] transition-colors cursor-pointer"
                >
                  Submit another problem statement
                </button>
              </motion.div>
            ) : (
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit} 
                className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-6 shadow-md text-left"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[var(--border-color)]">
                  <span className="text-xs font-mono text-[#e0fb2e] uppercase font-bold">
                    TECHNICAL INTAKE FORM
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)]">
                    DIRECT TO SENIOR ENGINEERS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[var(--text-secondary)] uppercase block">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Markus Weber"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[var(--text-secondary)] uppercase block">
                      Work Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="m.weber@enterprise.de"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-company" className="text-[var(--text-secondary)] uppercase block">
                      Company / Organization *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Industrial Solutions GmbH"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-role" className="text-[var(--text-secondary)] uppercase block">
                      Role / Title
                    </label>
                    <input
                      id="contact-role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="VP Engineering / CTO / Head of AI"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)_minmax(0,1fr)] gap-4 items-end">
                  <div className="space-y-1.5 font-mono text-xs min-w-0">
                    <label htmlFor="contact-stage" className="text-[var(--text-secondary)] uppercase block">
                      Engineering Track / Engagement Type
                    </label>
                    <div className="relative w-full">
                      <select
                        id="contact-stage"
                        value={formData.projectStage}
                        onChange={(e) => setFormData({ ...formData, projectStage: e.target.value })}
                        className="w-full h-[52px] px-4 py-3 pr-10 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors cursor-pointer min-w-0 appearance-none"
                        style={{ WebkitAppearance: 'none', appearance: 'none' }}
                      >
                        {stageOptions.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
                    </div>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label htmlFor="contact-scheduling-date" className="text-[var(--text-secondary)] uppercase block">
                      Scheduling Date *
                    </label>
                    <CustomDateField
                      value={formData.schedulingDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(value) => setFormData({ ...formData, schedulingDate: value })}
                    />
                  </div>

                  <div className="space-y-1.5 font-mono text-xs">
                    <label htmlFor="contact-scheduling-time" className="text-[var(--text-secondary)] uppercase block">
                      Scheduling Time *
                    </label>
                    <CustomTimeField
                      value={formData.schedulingTime}
                      onChange={(value) => setFormData({ ...formData, schedulingTime: value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="contact-problem" className="text-[var(--text-secondary)] uppercase block">
                    What is the core technical roadblock or workflow bottleneck? *
                  </label>
                  <textarea
                    id="contact-problem"
                    rows={4}
                    required
                    value={formData.problemStatement}
                    onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                    placeholder="Describe the latency constraint, document volume, edge camera requirement, or enterprise integration friction..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors font-sans leading-relaxed"
                  />
                </div>

                <div className="space-y-1.5 font-mono text-xs">
                  <label htmlFor="contact-constraints" className="text-[var(--text-secondary)] uppercase block">
                    Current Systems &amp; Infrastructure Constraints (Optional)
                  </label>
                  <textarea
                    id="contact-constraints"
                    rows={2}
                    value={formData.constraints}
                    onChange={(e) => setFormData({ ...formData, constraints: e.target.value })}
                    placeholder="e.g. Air-gapped on-premise requirement, SAP ERP, German data residency, NVIDIA Jetson hardware..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[#e0fb2e] transition-colors font-sans leading-relaxed"
                  />
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-400">
                    {errorMessage}
                  </div>
                )}

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[var(--text-primary)] text-[var(--bg-base)] font-display font-bold text-xs tracking-tight transition-all cursor-pointer shadow-xl flex items-center justify-center gap-2 hover:opacity-90"
                >
                  {isSubmitting ? (
                    <span>Transmitting to Engineering Pod...</span>
                  ) : (
                    <>
                      <span>Transmit Problem Statement</span>
                      <Send className="w-4 h-4 text-current" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </div>

          {/* Right Coordinates & Security Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-6 shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] uppercase font-bold">
                <Terminal className="w-4 h-4" />
                <span>DIRECT INTAKE CHANNELS</span>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1">
                  <div className="text-[var(--text-muted)] text-[11px] uppercase">Primary Email Intake:</div>
                  <div className="text-[var(--text-primary)] text-sm font-bold">
                    <a href={`mailto:${brand.contact.email}`} className="hover:underline text-[var(--text-primary)]">
                      {brand.contact.email}
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[var(--bg-surface-subtle)] border border-[var(--border-color)] space-y-1">
                  <div className="text-[var(--text-muted)] text-[11px] uppercase">Operational Geography:</div>
                  <div className="text-[var(--text-primary)] font-medium">{brand.contact.primaryRegion}</div>
                  <div className="text-[11px] text-[var(--text-secondary)] font-sans font-normal">
                    Engineering pods operate across CET / European time zones.
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-4 shadow-md"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#e0fb2e] uppercase font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>CONFIDENTIALITY &amp; IP GUARANTEE</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                We execute mutual NDAs prior to deep architectural inspections. Client problem statements, proprietary codebases, and production telemetry remain strictly private and confidential.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[var(--text-muted)]">
                ✓ 100% Client Code &amp; Weights Retention
              </div>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}

