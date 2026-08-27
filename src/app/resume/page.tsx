"use client";

import * as React from "react";
import Link from "next/link";
import {
  Printer,
  ArrowLeft,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Layers,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export default function ResumePage() {
  const { profile, experiences, skills, education } = PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-muted/40 p-4 sm:p-8 print:p-0 print:bg-white text-slate-900">
      {/* Top Action Bar (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Interactive Portfolio</span>
        </Link>

        <Button onClick={handlePrint} className="gap-2 text-xs shadow-md">
          <Printer className="h-4 w-4" />
          <span>Print / Save as PDF</span>
        </Button>
      </div>

      {/* A4 Paper Container */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl border shadow-xl p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:max-w-full space-y-8 font-sans">
        {/* Resume Header */}
        <div className="border-b pb-6 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight font-thai">
                {profile.nameTh} ({profile.nameEn})
              </h1>
              <p className="text-base font-bold text-blue-700 font-thai">
                {profile.roleEn}
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 sm:text-right font-mono">
              <div className="flex items-center sm:justify-end gap-1.5">
                <Mail className="h-3.5 w-3.5 text-blue-600" />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center sm:justify-end gap-1.5">
                <Globe className="h-3.5 w-3.5 text-blue-600" />
                <span>chaow.dev</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-700 font-thai leading-relaxed pt-2">
            {profile.summary}
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-800 border-b pb-1 font-mono flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-blue-600" />
            Professional Experience (15+ Years)
          </h2>

          <div className="space-y-5">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between font-semibold text-slate-900">
                  <div className="text-sm font-bold font-thai">
                    {exp.role} — <span className="text-slate-600 font-normal">{exp.companyType}</span>
                  </div>
                  <span className="text-slate-500 font-mono">{exp.period}</span>
                </div>

                <p className="text-slate-600 font-thai">{exp.description}</p>

                <ul className="list-disc pl-4 space-y-1 text-slate-700 font-thai">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>

                <div className="pt-1 text-[11px] text-slate-500 font-mono">
                  <strong className="text-slate-700">Technologies:</strong> {exp.skills.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-800 border-b pb-1 font-mono flex items-center gap-2">
            <Code2 className="h-4 w-4 text-blue-600" />
            Skills & Technical Competencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {skills.map((cat, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="font-bold text-slate-900">{cat.title}:</span>{" "}
                <span className="text-slate-700">
                  {cat.skills.map((s) => s.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-blue-800 border-b pb-1 font-mono flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-blue-600" />
            Education
          </h2>

          <div className="space-y-3 text-xs">
            {education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="font-bold text-slate-900 font-thai">
                    {edu.degreeEn} ({edu.degree})
                  </div>
                  <div className="text-slate-600 font-thai">
                    {edu.institutionEn} — {edu.institution}
                  </div>
                </div>
                <div className="text-slate-500 font-mono sm:text-right">{edu.yearEn}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
