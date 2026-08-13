/* ============================================================
   INDUSTRCONS LEARNING HUB — CURRICULUM DATA MODEL
   Structured as flat, ID-referenced tables so this file can be
   swapped for a CMS/DB later without touching the UI layer.
   ============================================================ */

const DB = {

  programs: [
    {
      id: "cpm",
      code: "IC-LH-CPM",
      level: "PROFESSIONAL",
      title: { az: "Tikinti Layihə İdarəetməsi", en: "Construction Project Management" },
      tagline: { az: "Mobilizasiyadan təhvilə qədər layihəni idarə etmək bacarığı", en: "Manage a project from mobilization to handover" },
      description: {
        az: "Tikinti layihələrinin planlaşdırılması, icrası və nəzarətinin əsas kompetensiyalarını əhatə edən özül proqramdır. FIDIC əsaslı müqavilə məntiqi, cədvəlləşdirmə, xərc nəzarəti və sənədləşdirməni birləşdirir.",
        en: "A foundation program covering planning, execution and control of construction projects — contracts, scheduling, cost control and documentation combined."
      },
      hours: 180,
      subjects: ["cpf-101", "pmf-101", "eng-math-101", "read-dwg-101", "excel-eng-101", "fidic-101", "capstone-cpm"],
      roles: ["Project Coordinator", "Project Engineer", "Assistant Project Manager", "Project Manager"]
    },
    {
      id: "qaqc",
      code: "IC-LH-QAQC",
      level: "PROFESSIONAL",
      title: { az: "Tikintidə QA/QC", en: "Construction QA/QC" },
      tagline: { az: "Keyfiyyətə təminat və nəzarət sistemi qurmaq bacarığı", en: "Build a project quality assurance and control system" },
      description: {
        az: "Tikinti sahəsində keyfiyyət təminatı və nəzarətinin praktiki əsaslarını öyrədir: inspeksiya, NCR idarəetməsi, materialların yoxlanması və sənədləşdirmə.",
        en: "Teaches practical QA/QC on construction sites: inspections, NCR management, material verification and documentation."
      },
      hours: 160,
      subjects: ["qaqc-101", "materials-101", "read-dwg-101", "docs-101", "risk-101", "capstone-qaqc"],
      roles: ["QA/QC Engineer", "Quality Engineer", "QA/QC Coordinator"]
    },
    {
      id: "cost",
      code: "IC-LH-COST",
      level: "PROFESSIONAL",
      title: { az: "Tikintidə Xərc Nəzarəti", en: "Construction Cost Control" },
      tagline: { az: "Layihə büdcəsini izləmək və analiz etmək bacarığı", en: "Track, analyze and report project cost" },
      description: {
        az: "Kəmiyyət çıxarışından cash-flow analizinə qədər xərc nəzarətinin praktiki alətlərini, əsasən Excel əsaslı iş axınlarını öyrədir.",
        en: "Practical cost-control tools from quantity takeoff to cash-flow analysis, built around real Excel workflows."
      },
      hours: 160,
      subjects: ["cost-101", "excel-eng-101", "cpf-101", "qto-101", "procurement-101", "capstone-cost"],
      roles: ["Cost Control Engineer", "Cost Engineer", "Project Controls Engineer"]
    }
  ],

  /* Subjects — cpf-101 is the fully-built flagship subject.
     The rest carry real, correct structural metadata but their
     lesson/task bodies are marked "coming soon" until authored. */
  subjects: {

    "cpf-101": {
      code: "CPF-101",
      title: { az: "Tikinti Planlaşdırmasının Əsasları", en: "Construction Planning Fundamentals" },
      description: {
        az: "Tikinti layihəsinin cədvəlini necə qurmaq, təhlil etmək və idarə etmək öyrədilir — WBS-dən kritik yol təhlilinə qədər.",
        en: "How to build, read and control a construction schedule — from WBS to critical path analysis."
      },
      why: {
        az: "Planlaşdırma bacarığı olmadan heç bir mühəndis layihənin real vəziyyətini başa düşə bilməz. Bu fənn Planning Engineer və Project Controls rollarının əsasını təşkil edir.",
        en: "Without scheduling literacy, no engineer can read a project's real status. This subject underlies every Planning and Project Controls role."
      },
      outcomes: {
        az: [
          "WBS (İş Bölgü Strukturu) qurmaq",
          "Fəaliyyətlər arası asılılıqları müəyyən etmək",
          "Kritik yolu (Critical Path) hesablamaq",
          "Gecikmə səbəblərini təhlil etmək",
          "S-Curve və proqres hesabatı hazırlamaq"
        ],
        en: [
          "Build a Work Breakdown Structure (WBS)",
          "Define activity dependencies and logic",
          "Calculate the Critical Path",
          "Analyze the root causes of delay",
          "Produce an S-Curve and progress report"
        ]
      },
      prerequisites: { az: "Yoxdur (özül fənndir)", en: "None (foundation subject)" },
      hours: 24,
      difficulty: "FOUNDATION",
      skills: {
        az: ["WBS qurma", "Şəbəkə diaqramı", "Kritik yol təhlili", "Gecikmə analizi", "S-Curve hazırlama"],
        en: ["WBS construction", "Network diagramming", "Critical path analysis", "Delay analysis", "S-Curve reporting"]
      },
      applications: {
        az: "Planning Engineer, Project Controls Engineer və Site Engineer rollarında gündəlik istifadə olunur — həftəlik proqres iclaslarından tender mərhələsinə qədər.",
        en: "Used daily by Planning Engineers, Project Controls Engineers and Site Engineers — from weekly progress meetings through the tender stage."
      },
      resources: [
        {
          title: "Guide to Good Practice in the Management of Time in Complex Projects",
          org: "CIOB (Chartered Institute of Building)",
          type: { az: "Sənaye standartı bələdçisi", en: "Industry practice guide" },
          why: { az: "Cədvəlləşdirmə üzrə ən çox istinad edilən praktiki bələdçilərdən biridir.", en: "One of the most widely referenced practical guides on scheduling." }
        },
        {
          title: "Project Management Body of Knowledge (PMBOK) — Schedule Management",
          org: "PMI",
          type: { az: "Peşəkar standart", en: "Professional standard" },
          why: { az: "Cədvəl idarəetməsinin qlobal qəbul edilmiş terminologiyasını verir.", en: "Provides the globally accepted terminology for schedule management." }
        }
      ],
      modules: {
        az: [
          "Modul 1 — WBS və fəaliyyət siyahısı",
          "Modul 2 — Asılılıqlar və şəbəkə diaqramı",
          "Modul 3 — Kritik yol hesablaması",
          "Modul 4 — Gecikmə təhlili və bərpa planı",
          "Modul 5 — Proqres hesabatı və S-Curve"
        ],
        en: [
          "Module 1 — WBS and activity list",
          "Module 2 — Dependencies and network diagram",
          "Module 3 — Critical path calculation",
          "Module 4 — Delay analysis and recovery plan",
          "Module 5 — Progress reporting and S-Curve"
        ]
      },
      tasks: [
        {
          id: "cpf-t1", difficulty: "FOUNDATION",
          title: { az: "Tapşırıq 1 — WBS Qurulması", en: "Task 1 — Build a WBS" },
          role: { az: "Siz Junior Planning Engineer rolundasınız.", en: "You are acting as a Junior Planning Engineer." },
          scenario: {
            az: "3 mərtəbəli inzibati binanın konstruksiya işləri üçün sizə fəaliyyətlərin qarışıq siyahısı verilib. Meneceriniz sizdən strukturlaşdırılmış WBS hazırlamağı xahiş edir.",
            en: "You've been given an unordered list of activities for the structural works of a 3-storey admin building. Your manager asks you to structure them into a WBS."
          },
          mentor: {
            az: "WBS — layihəni idarə oluna bilən hissələrə bölmək üsuludur. Ümumi səhv: fəaliyyətləri fiziki ardıcıllıqla deyil, təsadüfi sırayla qruplaşdırmaq. Düzgün WBS həmişə yuxarıdan aşağıya (bina → mərtəbə → element) gedir.",
            en: "A WBS breaks a project into manageable parts. Common mistake: grouping activities randomly instead of by physical/logical hierarchy. A correct WBS always flows top-down (building → floor → element)."
          },
          instructions: {
            az: "Verilmiş 15 fəaliyyəti (özül, kolon, tir, döşəmə, divar və s.) 3 səviyyəli WBS strukturuna (Layihə → Mərtəbə → Element) düzün.",
            en: "Arrange the given 15 activities (foundation, columns, beams, slab, walls, etc.) into a 3-level WBS (Project → Floor → Element)."
          },
          format: { az: "Excel və ya sənədləşdirilmiş siyahı", en: "Excel or a structured list document" },
          time: { az: "45 dəqiqə", en: "45 minutes" },
          criteria: {
            az: ["Bütün 15 fəaliyyət daxil edilib", "Hierarxiya məntiqi düzgündür", "Adlandırma tutarlıdır"],
            en: ["All 15 activities included", "Hierarchy logic is correct", "Naming is consistent"]
          },
          check: {
            type: "mc",
            question: { az: "Düzgün qurulmuş WBS-də ən yuxarı (1-ci) səviyyə nəyi göstərir?", en: "In a correctly built WBS, what does the top (level 1) level represent?" },
            options: {
              az: ["Ayrı-ayrı fəaliyyətlər (məs. beton tökmə)", "Bütün layihə (məs. bina)", "Materialların siyahısı"],
              en: ["Individual activities (e.g. concrete pour)", "The whole project (e.g. the building)", "A list of materials"]
            },
            correct: 1
          }
        },
        {
          id: "cpf-t2", difficulty: "INTERMEDIATE",
          title: { az: "Tapşırıq 2 — Kritik Yolun Hesablanması", en: "Task 2 — Calculate the Critical Path" },
          role: { az: "Siz Planning Engineer rolundasınız.", en: "You are acting as a Planning Engineer." },
          scenario: {
            az: "Aşağıdakı 5 fəaliyyətdən ibarət kiçik şəbəkə verilib: A (3 gün, asılılıq yoxdur) → B (5 gün, A-dan sonra) → D (6 gün, B-dən sonra) → E (2 gün, D-dən sonra); paralel olaraq A (3 gün) → C (4 gün, A-dan sonra) → E (2 gün, C-dən sonra). E hər iki yoldan (B-D və C) asılıdır və yalnız hər ikisi bitdikdən sonra başlaya bilər.",
            en: "A small 5-activity network is given: A (3 days, no dependency) → B (5 days, after A) → D (6 days, after B) → E (2 days, after D); in parallel, A (3 days) → C (4 days, after A) → E (2 days, after C). E depends on both paths (B-D and C) and can only start once both are finished."
          },
          mentor: {
            az: "Kritik yol — layihənin ən uzun (buferi olmayan) ardıcıllığıdır. Onu gecikdirmək bütün layihəni gecikdirir. Ümumi səhv: ən çox fəaliyyəti olan yolu kritik hesab etmək — düzgün ölçü müddətdir, say deyil.",
            en: "The critical path is the longest (zero-float) sequence in the project. Delaying it delays the whole project. Common mistake: assuming the path with the most activities is critical — the correct measure is duration, not count."
          },
          instructions: {
            az: "Forward/backward pass metodu ilə hər fəaliyyət üçün ES, EF, LS, LF hesablayın və kritik yolu müəyyən edin.",
            en: "Using the forward/backward pass method, calculate ES, EF, LS, LF for each activity and identify the critical path."
          },
          format: { az: "Excel cədvəli", en: "Excel spreadsheet" },
          time: { az: "60 dəqiqə", en: "60 minutes" },
          criteria: {
            az: ["Hesablamalar düzgündür", "Kritik yol düzgün müəyyən edilib", "Float dəyərləri göstərilib"],
            en: ["Calculations are correct", "Critical path correctly identified", "Float values shown"]
          },
          check: {
            type: "text",
            question: { az: "Yuxarıdakı şəbəkəyə görə layihənin ümumi müddəti (kritik yol) neçə gündür?", en: "Based on the network above, what is the project's total duration (critical path), in days?" },
            answers: ["16", "16 gün", "16 gun", "16 days"]
          }
        },
        {
          id: "cpf-t3", difficulty: "ADVANCED",
          title: { az: "Tapşırıq 3 — Gecikmə Təhlili (Real Case)", en: "Task 3 — Delay Analysis (Real Case)" },
          role: { az: "Siz Project Controls Engineer rolundasınız.", en: "You are acting as a Project Controls Engineer." },
          scenario: {
            az: "Layihə 3 həftə gecikib. Baseline və actual cədvəllər, həmçinin sahə qeydləri (hava şəraiti, material çatışmazlığı, dizayn dəyişikliyi) verilib.",
            en: "The project is 3 weeks behind. Baseline and actual schedules are provided, along with site notes (weather, material shortage, design change)."
          },
          mentor: {
            az: "Gecikmə təhlilinin məqsədi təkcə 'nə qədər gecikib' deyil, 'niyə və kimin səbəbindən' sualına cavab verməkdir — bu, müqavilə iddiaları üçün vacibdir.",
            en: "Delay analysis answers not just 'how much' but 'why and whose responsibility' — critical for contractual claims."
          },
          instructions: {
            az: "Baseline ilə actual cədvəli müqayisə edin, gecikməyə səbəb olan fəaliyyətləri müəyyənləşdirin, hər səbəbi (Employer/Contractor/Neutral) təsnif edin və bərpa planı təklif edin.",
            en: "Compare baseline to actual, identify the activities driving the delay, classify each cause (Employer/Contractor/Neutral), and propose a recovery plan."
          },
          format: { az: "Qısa hesabat (Word/PDF) + dəstəkləyici Excel", en: "Short report (Word/PDF) + supporting Excel" },
          time: { az: "90 dəqiqə", en: "90 minutes" },
          criteria: {
            az: ["Səbəb-nəticə düzgün əlaqələndirilib", "Təsnifat məntiqlidir", "Bərpa planı realistdir"],
            en: ["Cause-effect correctly linked", "Classification is logical", "Recovery plan is realistic"]
          },
          check: {
            type: "mc",
            question: { az: "Layihə hava şəraiti (fors-major) səbəbindən gecikibsə, bu adətən hansı kateqoriyaya aid edilir?", en: "If a project is delayed due to weather (a force-majeure event), which category does this usually fall under?" },
            options: {
              az: ["İcraçının günahı (Contractor)", "Sifarişçinin günahı (Employer)", "Neytral / bağışlanan (Neutral / Excusable)"],
              en: ["Contractor's fault", "Employer's fault", "Neutral / Excusable"]
            },
            correct: 2
          }
        }
      ],
      assessment: {
        az: "Hər tapşırıq rubrik üzrə qiymətləndirilir (Meyar → Bal). Fənni tamamlamaq üçün minimum 70% tələb olunur.",
        en: "Each task is graded against a rubric (Criterion → Score). 70% minimum is required to complete the subject."
      },
      challengeExam: {
        az: "Fənni artıq bilən tələbələr üçün 20 sualdan/2 praktiki ssenaridən ibarət Challenge Exam mövcuddur. 80%+ nəticə fənni birbaşa 'Tamamlandı' statusuna keçirir.",
        en: "Students who already know the material can take a Challenge Exam (20 questions + 2 practical scenarios). 80%+ marks the subject 'Completed' directly."
      }
    },

    /* --- Structural stubs: metadata is real, full lesson/task
       content will be authored in the next pass. --- */
    "pmf-101": { code: "PMF-101", title: { az: "Layihə İdarəetməsinin Əsasları", en: "Project Management Fundamentals" }, hours: 20, difficulty: "FOUNDATION", stub: true },
    "eng-math-101": { code: "EM-101", title: { az: "Mühəndislər üçün Riyaziyyat", en: "Engineering Mathematics" }, hours: 16, difficulty: "FOUNDATION", stub: true },
    "read-dwg-101": { code: "RCD-101", title: { az: "Tikinti Çertyojlarının Oxunması", en: "Reading Construction Drawings" }, hours: 18, difficulty: "FOUNDATION", stub: true },
    "excel-eng-101": { code: "EXE-101", title: { az: "Mühəndislər üçün Excel", en: "Excel for Engineers" }, hours: 20, difficulty: "FOUNDATION", stub: true },
    "fidic-101": { code: "FID-101", title: { az: "FIDIC-in Əsasları", en: "FIDIC Fundamentals" }, hours: 16, difficulty: "PROFESSIONAL", stub: true },
    "capstone-cpm": { code: "CAP-CPM", title: { az: "Yekun Layihə: Layihə İdarəetmə Paketi", en: "Capstone: Project Management Package" }, hours: 30, difficulty: "ADVANCED", stub: true },

    "qaqc-101": { code: "QAQC-101", title: { az: "QA/QC-nin Əsasları", en: "QA/QC Fundamentals" }, hours: 24, difficulty: "FOUNDATION", stub: true },
    "materials-101": { code: "MAT-101", title: { az: "Tikinti Materialları", en: "Construction Materials" }, hours: 18, difficulty: "FOUNDATION", stub: true },
    "docs-101": { code: "DOC-101", title: { az: "Mühəndis Sənədləşdirməsi", en: "Engineering Documentation" }, hours: 14, difficulty: "FOUNDATION", stub: true },
    "risk-101": { code: "RSK-101", title: { az: "Risklərin İdarə Edilməsi", en: "Risk Management" }, hours: 14, difficulty: "PROFESSIONAL", stub: true },
    "capstone-qaqc": { code: "CAP-QAQC", title: { az: "Yekun Layihə: QA/QC Sistemi", en: "Capstone: QA/QC System" }, hours: 28, difficulty: "ADVANCED", stub: true },

    "cost-101": { code: "COST-101", title: { az: "Xərc Nəzarətinin Əsasları", en: "Cost Control Fundamentals" }, hours: 22, difficulty: "FOUNDATION", stub: true },
    "qto-101": { code: "QTO-101", title: { az: "Kəmiyyət Çıxarışı", en: "Quantity Takeoff" }, hours: 18, difficulty: "FOUNDATION", stub: true },
    "procurement-101": { code: "PROC-101", title: { az: "Satınalma Əsasları", en: "Procurement Fundamentals" }, hours: 14, difficulty: "PROFESSIONAL", stub: true },
    "capstone-cost": { code: "CAP-COST", title: { az: "Yekun Layihə: Xərc Nəzarəti Cədvəli", en: "Capstone: Cost Control Workbook" }, hours: 28, difficulty: "ADVANCED", stub: true }
  }
};
