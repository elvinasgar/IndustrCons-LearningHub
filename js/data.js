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
    },
    {
      id: "cm",
      code: "IC-LH-CM",
      level: "PROFESSIONAL",
      title: { az: "Tikinti Menecmenti", en: "Construction Management" },
      tagline: { az: "Sahədə əməliyyatları uçdan-uca idarə etmək bacarığı", en: "Run day-to-day site operations end to end" },
      description: {
        az: "Mobilizasiyadan təhvilə qədər sahə əməliyyatlarının idarə edilməsi: subpodratçılar, resurslar, keyfiyyət və təhlükəsizliyin əlaqələndirilməsi.",
        en: "Managing site operations from mobilization to handover — coordinating subcontractors, resources, quality and safety."
      },
      hours: 170,
      subjects: ["pmf-101", "materials-101", "read-dwg-101", "risk-101", "docs-101", "capstone-cm"],
      roles: ["Site Manager", "Construction Manager", "Works Manager"]
    },
    {
      id: "planning",
      code: "IC-LH-PLN",
      level: "PROFESSIONAL",
      title: { az: "Tikinti Planlaşdırması və Layihə Nəzarəti", en: "Construction Planning & Project Controls" },
      tagline: { az: "Cədvəl və layihə nəzarəti üzrə ixtisaslaşma", en: "Specialize in scheduling and project controls" },
      description: {
        az: "Planning Engineer və Project Controls rolları üçün dərinləşdirilmiş cədvəlləşdirmə, proqres izləmə və hesabatlıq bacarıqları.",
        en: "Deeper scheduling, progress-tracking and reporting skills for Planning Engineer and Project Controls roles."
      },
      hours: 150,
      subjects: ["cpf-101", "excel-eng-101", "cost-101", "docs-101", "capstone-planning"],
      roles: ["Planning Engineer", "Project Controls Engineer", "Scheduler"]
    },
    {
      id: "hse",
      code: "IC-LH-HSE",
      level: "PROFESSIONAL",
      title: { az: "Tikintidə HSE", en: "Construction HSE" },
      tagline: { az: "Sahədə sağlamlıq, təhlükəsizlik və ətraf mühit idarəetməsi", en: "Health, safety and environmental management on site" },
      description: {
        az: "Risk qiymətləndirməsi, toolbox talk, hadisə araşdırması və HSE sənədləşdirməsinin praktiki əsasları.",
        en: "Practical foundations of risk assessment, toolbox talks, incident investigation and HSE documentation."
      },
      hours: 150,
      subjects: ["hse-101", "risk-101", "docs-101", "materials-101", "capstone-hse"],
      roles: ["HSE Officer", "HSE Engineer", "HSE Coordinator"]
    },
    {
      id: "site-eng",
      code: "IC-LH-SEN",
      level: "PROFESSIONAL",
      title: { az: "Sahə Mühəndisliyi", en: "Site Engineering" },
      tagline: { az: "Gündəlik sahə nəzarəti və ölçmə bacarıqları", en: "Day-to-day site supervision and setting-out skills" },
      description: {
        az: "Çertyoj oxuma, ölçmə (setting-out), sahə sənədləşdirməsi və gündəlik icra nəzarəti üzrə praktiki bacarıqlar.",
        en: "Practical skills in drawing reading, setting-out, site documentation and daily execution control."
      },
      hours: 160,
      subjects: ["read-dwg-101", "surveying-101", "eng-math-101", "docs-101", "capstone-site-eng"],
      roles: ["Site Engineer", "Junior Site Engineer", "Field Engineer"]
    },
    {
      id: "const-eng",
      code: "IC-LH-CEN",
      level: "PROFESSIONAL",
      title: { az: "Tikinti Mühəndisliyi", en: "Construction Engineering" },
      tagline: { az: "Tikinti üsulları və mühəndislik həllərinin tətbiqi", en: "Applying construction methods and engineering solutions" },
      description: {
        az: "Tikinti metodlarının seçilməsi, müvəqqəti konstruksiyalar və icra mərhələsində mühəndislik qərarlarının verilməsi.",
        en: "Selecting construction methods, temporary works, and engineering decision-making during execution."
      },
      hours: 170,
      subjects: ["civil-eng-101", "materials-101", "read-dwg-101", "eng-math-101", "capstone-const-eng"],
      roles: ["Construction Engineer", "Method Engineer", "Site Engineer"]
    },
    {
      id: "qs",
      code: "IC-LH-QS",
      level: "PROFESSIONAL",
      title: { az: "Kəmiyyət Mühəndisliyi (QS)", en: "Quantity Surveying" },
      tagline: { az: "Kəmiyyət çıxarışı, BOQ və ödəniş sertifikatları", en: "Quantity takeoff, BOQ and payment certificates" },
      description: {
        az: "Çertyojdan kəmiyyət çıxarmaq, BOQ hazırlamaq, aralıq ödəniş sertifikatları və variasiyaları idarə etmək bacarıqları.",
        en: "Skills to take off quantities from drawings, prepare a BOQ, and manage interim payment certificates and variations."
      },
      hours: 160,
      subjects: ["qto-101", "read-dwg-101", "cost-101", "fidic-101", "capstone-qs"],
      roles: ["Quantity Surveyor", "Assistant QS", "Cost Estimator"]
    },
    {
      id: "bim",
      code: "IC-LH-BIM",
      level: "PROFESSIONAL",
      title: { az: "Tikintidə BIM", en: "BIM for Construction" },
      tagline: { az: "Model-əsaslı əlaqələndirmə və sənədləşdirmə", en: "Model-based coordination and documentation" },
      description: {
        az: "BIM iş axınlarının əsasları: modeldən kəmiyyət çıxarma, ziddiyyət yoxlanışı (clash detection) və 4D/5D anlayışları.",
        en: "Fundamentals of BIM workflows: quantity extraction from models, clash detection, and 4D/5D concepts."
      },
      hours: 150,
      subjects: ["bim-101", "read-dwg-101", "qto-101", "digital-const-101", "capstone-bim"],
      roles: ["BIM Coordinator", "BIM Modeler", "Digital Engineer"]
    },
    {
      id: "civil-eng",
      code: "IC-LH-CIV",
      level: "PROFESSIONAL",
      title: { az: "Tikinti Peşəkarları üçün Mülki Mühəndislik", en: "Civil Engineering for Construction Professionals" },
      tagline: { az: "Struktur və geotexniki əsasların praktiki icmalı", en: "A practical review of structural and geotechnical fundamentals" },
      description: {
        az: "Qeyri-mühəndis fonlu tikinti mütəxəssisləri üçün struktur elementlər, torpaq işləri və beton əsaslarının icmalı.",
        en: "A review of structural elements, earthworks and concrete fundamentals for construction professionals without an engineering background."
      },
      hours: 170,
      subjects: ["civil-eng-101", "eng-math-101", "materials-101", "read-dwg-101", "capstone-civil"],
      roles: ["Site Engineer", "Technical Office Engineer", "Junior Structural Engineer"]
    },
    {
      id: "contracts",
      code: "IC-LH-CON",
      level: "PROFESSIONAL",
      title: { az: "Tikinti Müqavilələri və FIDIC", en: "Construction Contracts & FIDIC" },
      tagline: { az: "Müqavilə şərtləri, iddialar və FIDIC-in tətbiqi", en: "Contract conditions, claims, and applying FIDIC" },
      description: {
        az: "FIDIC müqavilə formalarının strukturu, iddia (claim) hazırlığı və müqavilə risklərinin idarə edilməsi.",
        en: "The structure of FIDIC contract forms, claim preparation, and managing contractual risk."
      },
      hours: 150,
      subjects: ["fidic-101", "docs-101", "risk-101", "cpf-101", "capstone-contracts"],
      roles: ["Contracts Engineer", "Commercial Engineer", "Claims Specialist"]
    },
    {
      id: "procurement",
      code: "IC-LH-PRC",
      level: "PROFESSIONAL",
      title: { az: "Satınalma və Kommersiya İdarəetməsi", en: "Construction Procurement & Commercial Management" },
      tagline: { az: "Subpodratçı seçimi və kommersiya nəzarəti", en: "Subcontractor selection and commercial control" },
      description: {
        az: "Tender prosesi, subpodratçı müqayisəsi, satınalma izləyicisi və kommersiya risklərinin idarə edilməsi.",
        en: "The tender process, subcontractor comparison, procurement tracking and commercial risk management."
      },
      hours: 150,
      subjects: ["procurement-101", "cost-101", "fidic-101", "docs-101", "capstone-procurement"],
      roles: ["Procurement Engineer", "Buyer", "Commercial Coordinator"]
    },
    {
      id: "estimation",
      code: "IC-LH-EST",
      level: "PROFESSIONAL",
      title: { az: "Tikinti Smeta İşi", en: "Construction Estimation" },
      tagline: { az: "Tenderdən əvvəl dəqiq qiymət hazırlamaq bacarığı", en: "Building an accurate pre-tender estimate" },
      description: {
        az: "Kəmiyyət və qiymət məlumatlarından tam layihə smetası hazırlamaq, risk ehtiyatı və mənfəət marjını daxil etmək.",
        en: "Building a full project estimate from quantity and rate data, including risk contingency and profit margin."
      },
      hours: 150,
      subjects: ["estimation-101", "qto-101", "cost-101", "excel-eng-101", "capstone-estimation"],
      roles: ["Estimator", "Cost Estimator", "Tender Engineer"]
    },
    {
      id: "surveying",
      code: "IC-LH-SUR",
      level: "FOUNDATION",
      title: { az: "Tikinti Geodeziyasının Əsasları", en: "Construction Surveying Basics" },
      tagline: { az: "Ölçmə alətləri və sahə nəzarətinin əsasları", en: "Fundamentals of survey instruments and site control" },
      description: {
        az: "Total station və səviyyə alətlərindən istifadə, koordinatların yoxlanması və as-built ölçmələrin əsasları.",
        en: "Using total stations and levels, checking coordinates, and the fundamentals of as-built surveys."
      },
      hours: 120,
      subjects: ["surveying-101", "eng-math-101", "read-dwg-101", "capstone-surveying"],
      roles: ["Site Surveyor", "Survey Technician", "Setting-Out Engineer"]
    },
    {
      id: "tech-office",
      code: "IC-LH-TO",
      level: "PROFESSIONAL",
      title: { az: "Sənədləşdirmə və Texniki Ofis", en: "Construction Documentation & Technical Office" },
      tagline: { az: "RFI, çertyoj nəzarəti və texniki qeydiyyatın idarə edilməsi", en: "RFI, drawing control and technical records management" },
      description: {
        az: "RFI hazırlama, çertyoj versiyalarına nəzarət, təsdiq prosesi və layihə arxivinin idarə edilməsi.",
        en: "Preparing RFIs, controlling drawing revisions, the approval workflow, and managing the project archive."
      },
      hours: 130,
      subjects: ["tech-office-101", "docs-101", "read-dwg-101", "capstone-tech-office"],
      roles: ["Document Controller", "Technical Office Engineer", "Design Coordinator"]
    },
    {
      id: "digital-const",
      code: "IC-LH-DIG",
      level: "PROFESSIONAL",
      title: { az: "Rəqəmsal Tikinti", en: "Digital Construction" },
      tagline: { az: "Rəqəmsal alətlər və verilənlərlə tikintiyə nəzarət", en: "Managing construction with digital tools and data" },
      description: {
        az: "Sahə məlumat toplama alətləri, dashboard-lar və layihə idarəetməsində rəqəmsal iş axınlarının icmalı.",
        en: "A review of field data-capture tools, dashboards and digital workflows in project management."
      },
      hours: 130,
      subjects: ["digital-const-101", "bim-101", "excel-eng-101", "capstone-digital"],
      roles: ["Digital Engineer", "Data Coordinator", "Innovation Engineer"]
    },
    {
      id: "ai-const",
      code: "IC-LH-AI",
      level: "ADVANCED",
      title: { az: "Tikinti və Mühəndislikdə AI", en: "AI for Construction & Engineering" },
      tagline: { az: "Süni intellekt alətlərinin tikintidə praktiki tətbiqi", en: "Practical applications of AI tools in construction" },
      description: {
        az: "Sahə hesabatlarının avtomatlaşdırılması, məlumat təhlili və gündəlik iş axınlarında AI alətlərinin praktiki tətbiqi.",
        en: "Automating site reports, analyzing data, and practically applying AI tools in daily workflows."
      },
      hours: 120,
      subjects: ["ai-const-101", "digital-const-101", "excel-eng-101", "capstone-ai"],
      roles: ["Digital Engineer", "Innovation Engineer", "Project Engineer"]
    },
    {
      id: "leadership",
      code: "IC-LH-LDR",
      level: "ADVANCED",
      title: { az: "Mühəndislik Liderliyi və İdarəetmə", en: "Engineering Leadership & Management" },
      tagline: { az: "Komanda idarəetməsi və qərar qəbulu bacarıqları", en: "Team leadership and decision-making skills" },
      description: {
        az: "Komanda idarəetməsi, çətin danışıqlar, maraqlı tərəflərlə ünsiyyət və mühəndislik qərarlarının əsaslandırılması.",
        en: "Team leadership, difficult negotiations, stakeholder communication and justifying engineering decisions."
      },
      hours: 130,
      subjects: ["leadership-101", "docs-101", "risk-101", "capstone-leadership"],
      roles: ["Senior Engineer", "Team Lead", "Project Manager"]
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
    "pmf-101": {
      code: "PMF-101",
      title: { az: "Layihə İdarəetməsinin Əsasları", en: "Project Management Fundamentals" },
      description: {
        az: "Layihənin həyat dövrü, maraqlı tərəflər, əhatə dairəsi və kommunikasiyanın idarə edilməsinin əsasları.",
        en: "The fundamentals of project lifecycle, stakeholders, scope and communication management."
      },
      why: {
        az: "Hər bir rol — Site Engineer-dən Project Manager-ə qədər — layihənin niyə bu ardıcıllıqla getdiyini və kimin nəyə görə cavabdeh olduğunu anlamalıdır. Bu fənn həmin ümumi dili qurur.",
        en: "Every role — from Site Engineer to Project Manager — needs to understand why a project moves in this sequence and who answers for what. This subject builds that shared language."
      },
      outcomes: {
        az: ["Layihənin həyat dövrü mərhələlərini izah etmək", "Maraqlı tərəf (stakeholder) xəritəsi qurmaq", "Əhatə dairəsi bəyanatı (Scope Statement) yazmaq", "RACI matrisası hazırlamaq", "Əsas kommunikasiya planı qurmaq"],
        en: ["Explain the project lifecycle stages", "Build a stakeholder map", "Write a Scope Statement", "Prepare a RACI matrix", "Build a basic communication plan"]
      },
      prerequisites: { az: "Yoxdur (özül fənndir)", en: "None (foundation subject)" },
      hours: 20,
      difficulty: "FOUNDATION",
      skills: {
        az: ["Stakeholder xəritələşdirmə", "Scope yazma", "RACI qurma", "Kommunikasiya planlaşdırması"],
        en: ["Stakeholder mapping", "Scope writing", "RACI construction", "Communication planning"]
      },
      applications: {
        az: "Layihənin kick-off toplantısından həftəlik status hesabatlarına qədər hər səviyyədə istifadə olunur.",
        en: "Used at every level, from the project kick-off meeting to weekly status reporting."
      },
      resources: [
        {
          title: "Construction Project Management Fundamentals Course (YouTube)",
          org: "Hany Abd Elshakour — Planning Engineer Est. (planningengineer.net)",
          type: { az: "Video kurs (YouTube)", en: "Video course (YouTube)" },
          why: { az: "Müəllif real sahə təcrübəli (Planning Manager) mühəndisdir; kurs tikinti kontekstinə xüsusi qurulub.", en: "Taught by an engineer with real field experience (Planning Manager); built specifically for the construction context." }
        },
        {
          title: "A Guide to the Project Management Body of Knowledge (PMBOK) — Introduction & Stakeholder chapters",
          org: "PMI",
          type: { az: "Peşəkar standart", en: "Professional standard" },
          why: { az: "Sənayenin ümumi qəbul edilmiş terminologiyasının mənbəyidir.", en: "The source of the industry's globally accepted terminology." }
        }
      ],
      modules: {
        az: ["Modul 1 — Layihənin həyat dövrü", "Modul 2 — Maraqlı tərəflər və gücə görə xəritələmə", "Modul 3 — Əhatə dairəsi (Scope) bəyanatı", "Modul 4 — RACI matrisası", "Modul 5 — Kommunikasiya planı"],
        en: ["Module 1 — Project lifecycle", "Module 2 — Stakeholders and power mapping", "Module 3 — Scope statement", "Module 4 — RACI matrix", "Module 5 — Communication plan"]
      },
      tasks: [
        {
          id: "pmf-t1", difficulty: "FOUNDATION",
          title: { az: "Tapşırıq 1 — Maraqlı Tərəf Xəritəsi", en: "Task 1 — Stakeholder Map" },
          role: { az: "Siz Project Coordinator rolundasınız.", en: "You are acting as a Project Coordinator." },
          scenario: { az: "Yeni ofis binası layihəsində 8 maraqlı tərəf müəyyənləşdirilib: Sifarişçi, Baş podratçı, Şəhər İcra Hakimiyyəti, Qonşu sakinlər, Dizayn komandası, Maliyyələşdirici bank, Podratçı işçiləri, Media.", en: "8 stakeholders have been identified for a new office building project: Client, Main Contractor, City Authority, Neighboring Residents, Design Team, Financing Bank, Contractor Workforce, Media." },
          mentor: { az: "Power/Interest Grid — hər maraqlı tərəfi 'təsir gücü' və 'maraq səviyyəsi' oxlarına görə 4 kvadrata bölür. Ümumi səhv: hamı ilə eyni intensivlikdə ünsiyyət qurmağa çalışmaq — düzgün yanaşma gücə və marağa uyğun fərqli strategiya seçməkdir.", en: "The Power/Interest Grid places each stakeholder into 4 quadrants by influence and interest level. Common mistake: trying to communicate with everyone at the same intensity — the correct approach is choosing a strategy matched to their power and interest." },
          instructions: { az: "8 maraqlı tərəfi Power/Interest Grid-də (Yüksək güc/Yüksək maraq, Yüksək güc/Aşağı maraq, Aşağı güc/Yüksək maraq, Aşağı güc/Aşağı maraq) yerləşdirin və hər kvadrat üçün strategiya yazın.", en: "Place the 8 stakeholders into the Power/Interest Grid (High power/High interest, High power/Low interest, Low power/High interest, Low power/Low interest) and write a strategy for each quadrant." },
          format: { az: "Excel və ya 2x2 diaqram", en: "Excel or a 2x2 diagram" },
          time: { az: "30 dəqiqə", en: "30 minutes" },
          criteria: { az: ["8 tərəf düzgün kvadratdadır", "Strategiyalar məntiqlidir"], en: ["All 8 stakeholders correctly placed", "Strategies are logical"] },
          check: {
            type: "mc",
            question: { az: "Yüksək güc, lakin aşağı maraqlı tərəf (məs. maliyyələşdirici bank) üçün hansı strategiya düzgündür?", en: "Which strategy is correct for a high-power, low-interest stakeholder (e.g. the financing bank)?" },
            options: { az: ["Razı saxla (Keep Satisfied)", "Yaxından idarə et (Manage Closely)", "Sadəcə izlə (Monitor)"], en: ["Keep Satisfied", "Manage Closely", "Monitor"] },
            correct: 0
          }
        },
        {
          id: "pmf-t2", difficulty: "INTERMEDIATE",
          title: { az: "Tapşırıq 2 — Əhatə Dairəsi Bəyanatı", en: "Task 2 — Scope Statement" },
          role: { az: "Siz Project Engineer rolundasınız.", en: "You are acting as a Project Engineer." },
          scenario: { az: "Menecer sizdən 2 mərtəbəli anbar binası üçün qısa Scope Statement hazırlamağı xahiş edir: nə daxildir, nə xaric edilir, əsas çatdırılanlar (deliverables) və məhdudiyyətlər (constraints).", en: "Your manager asks you to prepare a short Scope Statement for a 2-storey warehouse building: what's included, what's excluded, key deliverables, and constraints." },
          mentor: { az: "Scope Statement-in ən vacib hissəsi 'nə daxil DEYİL' bölməsidir — çünki gələcək mübahisələrin əksəriyyəti burada aydınlıq olmadığı üçün yaranır.", en: "The most important part of a Scope Statement is the 'what's NOT included' section — most future disputes arise from a lack of clarity here." },
          instructions: { az: "4 bölmədən ibarət qısa Scope Statement yazın: Daxildir, Xaric edilir, Əsas çatdırılanlar, Məhdudiyyətlər.", en: "Write a short 4-section Scope Statement: Included, Excluded, Key Deliverables, Constraints." },
          format: { az: "Qısa sənəd (Word/PDF)", en: "Short document (Word/PDF)" },
          time: { az: "40 dəqiqə", en: "40 minutes" },
          criteria: { az: ["Bütün 4 bölmə var", "Xaric edilənlər aydındır", "Məhdudiyyətlər realdır"], en: ["All 4 sections present", "Exclusions are clear", "Constraints are realistic"] },
          check: {
            type: "text",
            question: { az: "Scope Statement-də gələcək mübahisələrin qarşısını almaq üçün ən çox hansı bölmə vacibdir? (bir söz/ifadə ilə cavablayın)", en: "Which section of a Scope Statement is most important for preventing future disputes? (answer in one word/phrase)" },
            answers: ["xaric edilir", "xaricedilir", "exclusions", "excluded", "what is excluded", "exclusion"]
          }
        },
        {
          id: "pmf-t3", difficulty: "ADVANCED",
          title: { az: "Tapşırıq 3 — RACI Matrisası", en: "Task 3 — RACI Matrix" },
          role: { az: "Siz Project Coordinator rolundasınız.", en: "You are acting as a Project Coordinator." },
          scenario: { az: "5 fəaliyyət (Dizaynın təsdiqi, Büdcənin təsdiqi, Sahə inspeksiyası, Həftəlik hesabat, Son təhvil) və 4 rol (PM, Sifarişçi, Sahə Mühəndisi, QA/QC) verilib.", en: "5 activities (Design approval, Budget approval, Site inspection, Weekly report, Final handover) and 4 roles (PM, Client, Site Engineer, QA/QC) are given." },
          mentor: { az: "RACI-də hər fəaliyyət üçün YALNIZ BİR 'Accountable' (A) ola bilər — bir neçə nəfər cavabdeh olsa, heç kim həqiqətən cavabdeh olmur.", en: "In RACI, each activity can have only ONE 'Accountable' (A) — if several people are accountable, no one really is." },
          instructions: { az: "5x4 RACI cədvəli qurun (R=Responsible, A=Accountable, C=Consulted, I=Informed) — hər fəaliyyət üçün dəqiq bir A təyin edin.", en: "Build a 5x4 RACI table (R=Responsible, A=Accountable, C=Consulted, I=Informed) — assign exactly one A per activity." },
          format: { az: "Excel cədvəli", en: "Excel table" },
          time: { az: "35 dəqiqə", en: "35 minutes" },
          criteria: { az: ["Hər sətirdə yalnız bir A var", "Rollar məntiqlidir"], en: ["Exactly one A per row", "Role assignments are logical"] },
          check: {
            type: "mc",
            question: { az: "Bir fəaliyyət sətrində iki nəfər 'Accountable (A)' kimi işarələnibsə, bu nəyə işarədir?", en: "If two people are marked 'Accountable (A)' on one activity row, what does this indicate?" },
            options: { az: ["RACI düzgün qurulub", "Struktur səhvdir — dəqiqləşdirmək lazımdır", "Bu normaldır, iki nəfər həmişə cavabdeh olmalıdır"], en: ["The RACI is correctly built", "It's a structural error — needs clarifying", "This is normal; two people should always be accountable"] },
            correct: 1
          }
        }
      ],
      assessment: {
        az: "Hər tapşırıq rubrik üzrə qiymətləndirilir. Fənni tamamlamaq üçün minimum 70% tələb olunur.",
        en: "Each task is graded against a rubric. 70% minimum is required to complete the subject."
      },
      challengeExam: {
        az: "Layihə idarəetməsi əsaslarını bilən tələbələr üçün 15 sualdan ibarət Challenge Exam mövcuddur. 80%+ fənni birbaşa tamamlayır.",
        en: "A 15-question Challenge Exam is available for students who already know project management basics. 80%+ completes the subject directly."
      }
    },
    "eng-math-101": { code: "EM-101", title: { az: "Mühəndislər üçün Riyaziyyat", en: "Engineering Mathematics" }, hours: 16, difficulty: "FOUNDATION", stub: true },
    "read-dwg-101": { code: "RCD-101", title: { az: "Tikinti Çertyojlarının Oxunması", en: "Reading Construction Drawings" }, hours: 18, difficulty: "FOUNDATION", stub: true },
    "excel-eng-101": {
      code: "EXE-101",
      title: { az: "Mühəndislər üçün Excel", en: "Excel for Engineers" },
      description: {
        az: "Kəmiyyət, xərc və proqres məlumatlarını idarə etmək üçün Excel-in mühəndislikdə ən çox istifadə olunan funksiyaları.",
        en: "The most-used Excel functions in engineering, for managing quantity, cost and progress data."
      },
      why: {
        az: "Sənayedə demək olar hər hesabat, kəmiyyət cədvəli və büdcə izləyicisi Excel üzərində qurulur. Bu bacarıq olmadan heç bir texniki ofis və ya sahə rolu mümkün deyil.",
        en: "Almost every report, quantity sheet and budget tracker in the industry runs on Excel. No technical-office or site role is possible without this skill."
      },
      outcomes: {
        az: ["SUM, SUMIF, SUMPRODUCT funksiyalarını tətbiq etmək", "Şərti formatlaşdırma ilə vizual xəbərdarlıqlar qurmaq", "VLOOKUP/XLOOKUP ilə qiymət cədvəllərini birləşdirmək", "Sadə irəliləmə dashboard-u qurmaq"],
        en: ["Apply SUM, SUMIF, SUMPRODUCT functions", "Build visual alerts with conditional formatting", "Merge rate tables with VLOOKUP/XLOOKUP", "Build a simple progress dashboard"]
      },
      prerequisites: { az: "Excel-in əsas interfeysini tanımaq", en: "Basic familiarity with the Excel interface" },
      hours: 20,
      difficulty: "FOUNDATION",
      skills: {
        az: ["SUMIF/SUMPRODUCT", "Şərti formatlaşdırma", "VLOOKUP/XLOOKUP", "Sadə dashboard qurma"],
        en: ["SUMIF/SUMPRODUCT", "Conditional formatting", "VLOOKUP/XLOOKUP", "Basic dashboard building"]
      },
      applications: {
        az: "Kəmiyyət cədvəlləri, büdcə izləyiciləri, proqres hesabatları və Cost Control workbook-larında gündəlik istifadə olunur.",
        en: "Used daily in quantity sheets, budget trackers, progress reports and Cost Control workbooks."
      },
      resources: [
        {
          title: "Introduction to Excel for Civil Engineers (YouTube)",
          org: "YouTube — civil engineering education channel",
          type: { az: "Video dərs (YouTube)", en: "Video lesson (YouTube)" },
          why: { az: "Excel interfeysini birbaşa mühəndislik nümunələri üzərində izah edir.", en: "Explains the Excel interface directly through engineering examples." }
        },
        {
          title: "Excel & Civil Engineering Tricks & Formulas — Part 1 (YouTube)",
          org: "YouTube — construction estimation channel",
          type: { az: "Video dərs (YouTube)", en: "Video lesson (YouTube)" },
          why: { az: "Kəmiyyət və smeta işində real istifadə olunan düsturları göstərir.", en: "Shows formulas actually used in real quantity and estimation work." }
        }
      ],
      modules: {
        az: ["Modul 1 — İnterfeys və əsas naviqasiya", "Modul 2 — SUM, SUMIF, COUNTIF", "Modul 3 — SUMPRODUCT və çəkili hesablamalar", "Modul 4 — Şərti formatlaşdırma", "Modul 5 — Sadə dashboard qurulması"],
        en: ["Module 1 — Interface & basic navigation", "Module 2 — SUM, SUMIF, COUNTIF", "Module 3 — SUMPRODUCT & weighted calculations", "Module 4 — Conditional formatting", "Module 5 — Building a simple dashboard"]
      },
      tasks: [
        {
          id: "exe-t1", difficulty: "FOUNDATION",
          title: { az: "Tapşırıq 1 — SUMIF ilə Kateqoriya üzrə Cəm", en: "Task 1 — SUMIF by Category" },
          role: { az: "Siz Texniki Ofis Mühəndisi rolundasınız.", en: "You are acting as a Technical Office Engineer." },
          scenario: { az: "Materiallar cədvəlində: Beton — 120 m³, Beton — 80 m³, Polad — 45 ton, Beton — 60 m³, Polad — 20 ton.", en: "A materials sheet contains: Concrete — 120 m³, Concrete — 80 m³, Steel — 45 tons, Concrete — 60 m³, Steel — 20 tons." },
          mentor: { az: "SUMIF(diapazon, meyar, cəm_diapazonu) — kateqoriyaya görə süzülmüş cəmi hesablayır. Ümumi səhv: 'cəm_diapazonu' arqumentini unutmaq.", en: "SUMIF(range, criteria, sum_range) totals values filtered by category. Common mistake: forgetting the 'sum_range' argument." },
          instructions: { az: "SUMIF funksiyası ilə ümumi Beton (m³) və ümumi Polad (ton) miqdarını hesablayın.", en: "Use SUMIF to calculate total Concrete (m³) and total Steel (tons)." },
          format: { az: "Excel faylı", en: "Excel file" },
          time: { az: "20 dəqiqə", en: "20 minutes" },
          criteria: { az: ["Düsturlar düzgündür", "Nəticələr dəqiqdir"], en: ["Formulas are correct", "Results are accurate"] },
          check: { type: "text", question: { az: "Yuxarıdakı məlumata görə ümumi Beton miqdarı (m³) neçədir?", en: "Based on the data above, what is the total Concrete quantity (m³)?" }, answers: ["260", "260 m3", "260 m³"] }
        },
        {
          id: "exe-t2", difficulty: "INTERMEDIATE",
          title: { az: "Tapşırıq 2 — SUMPRODUCT ilə Çəkili Xərc", en: "Task 2 — Weighted Cost with SUMPRODUCT" },
          role: { az: "Siz Cost Control Engineer rolundasınız.", en: "You are acting as a Cost Control Engineer." },
          scenario: { az: "3 material: Beton (50 m³, 45 AZN/m³), Polad (10 ton, 1800 AZN/ton), Kərpic (2000 ədəd, 0.6 AZN/ədəd).", en: "3 materials: Concrete (50 m³, 45 AZN/m³), Steel (10 tons, 1800 AZN/ton), Brick (2000 units, 0.6 AZN/unit)." },
          mentor: { az: "SUMPRODUCT(miqdar_diapazonu, qiymət_diapazonu) — hər sətri ayrıca vurub cəmləyir, ayrıca köməkçi sütun tələb etmir.", en: "SUMPRODUCT(quantity_range, rate_range) multiplies each row and sums the results, without needing a helper column." },
          instructions: { az: "SUMPRODUCT ilə ümumi material xərcini hesablayın.", en: "Use SUMPRODUCT to calculate the total material cost." },
          format: { az: "Excel faylı", en: "Excel file" },
          time: { az: "25 dəqiqə", en: "25 minutes" },
          criteria: { az: ["SUMPRODUCT düzgün istifadə edilib", "Nəticə dəqiqdir"], en: ["SUMPRODUCT correctly applied", "Result is accurate"] },
          check: { type: "text", question: { az: "Ümumi material xərci (AZN) neçədir? (Beton: 50×45, Polad: 10×1800, Kərpic: 2000×0.6)", en: "What is the total material cost (AZN)? (Concrete: 50×45, Steel: 10×1800, Brick: 2000×0.6)" }, answers: ["21450", "21,450", "21450 azn", "21 450"] }
        },
        {
          id: "exe-t3", difficulty: "ADVANCED",
          title: { az: "Tapşırıq 3 — İrəliləmə Dashboard-u", en: "Task 3 — Progress Dashboard" },
          role: { az: "Siz Project Controls Engineer rolundasınız.", en: "You are acting as a Project Controls Engineer." },
          scenario: { az: "5 fəaliyyətin plan (%) və faktiki (%) irəliləmə dəyərləri verilib; menecer sizdən vizual status hesabatı istəyir.", en: "Planned (%) and actual (%) progress values for 5 activities are given; the manager wants a visual status report." },
          mentor: { az: "Rəngli xəbərdarlıq (qırmızı/sarı/yaşıl) üçün şərti formatlaşdırma düsturla birləşdirilir: fərq mənfidirsə qırmızı, kiçikdirsə sarı, müsbətdirsə yaşıl.", en: "Color alerts (red/yellow/green) are built by combining conditional formatting with a formula: negative variance = red, small = yellow, positive = green." },
          instructions: { az: "Plan-Faktiki fərqini hesablayın və şərti formatlaşdırma ilə 3 rəngli status sistemini tətbiq edin.", en: "Calculate the Planned-Actual variance and apply a 3-color conditional-formatting status system." },
          format: { az: "Excel dashboard", en: "Excel dashboard" },
          time: { az: "45 dəqiqə", en: "45 minutes" },
          criteria: { az: ["Fərq düzgün hesablanıb", "Rəng sistemi məntiqlidir", "Dashboard oxunaqlıdır"], en: ["Variance correctly calculated", "Color system is logical", "Dashboard is readable"] },
          check: { type: "mc", question: { az: "Fəaliyyətin faktiki irəliləməsi plandan geri qalırsa, düzgün quraşdırılmış dashboard-da bu hansı rənglə göstərilməlidir?", en: "If an activity's actual progress lags behind plan, what color should a correctly-built dashboard show?" }, options: { az: ["Yaşıl", "Qırmızı", "Göy"], en: ["Green", "Red", "Blue"] }, correct: 1 }
        }
      ],
      assessment: {
        az: "Hər tapşırıq düsturun düzgünlüyünə görə qiymətləndirilir. Minimum 70% tələb olunur.",
        en: "Each task is graded on formula correctness. 70% minimum is required."
      },
      challengeExam: {
        az: "Excel-i bilən tələbələr üçün 15 sualdan ibarət Challenge Exam mövcuddur.",
        en: "A 15-question Challenge Exam is available for students who already know Excel."
      }
    },
    "fidic-101": { code: "FID-101", title: { az: "FIDIC-in Əsasları", en: "FIDIC Fundamentals" }, hours: 16, difficulty: "PROFESSIONAL", stub: true },
    "capstone-cpm": { code: "CAP-CPM", title: { az: "Yekun Layihə: Layihə İdarəetmə Paketi", en: "Capstone: Project Management Package" }, hours: 30, difficulty: "ADVANCED", stub: true },

    "qaqc-101": {
      code: "QAQC-101",
      title: { az: "QA/QC-nin Əsasları", en: "QA/QC Fundamentals" },
      description: {
        az: "İnspeksiya Test Planı (ITP), NCR idarəetməsi və kök səbəb təhlilinin praktiki əsasları.",
        en: "The practical fundamentals of Inspection Test Plans (ITP), NCR management, and root-cause analysis."
      },
      why: {
        az: "Zəif QA/QC nəzarəti rework-ə, gecikməyə və mübahisəyə səbəb olur. Bu fənn tikinti sahəsində keyfiyyəti necə sistemli şəkildə təmin etməyi öyrədir.",
        en: "Weak QA/QC control leads to rework, delay and disputes. This subject teaches how to systematically assure quality on a construction site."
      },
      outcomes: {
        az: ["ITP (İnspeksiya Test Planı) hazırlamaq", "Hold Point və Witness Point fərqini tətbiq etmək", "NCR (Uyğunsuzluq Hesabatı) yazmaq", "Kök səbəb təhlili (5 Why) aparmaq"],
        en: ["Prepare an ITP (Inspection Test Plan)", "Apply the Hold Point vs Witness Point distinction", "Write an NCR (Non-Conformance Report)", "Perform root-cause analysis (5 Whys)"]
      },
      prerequisites: { az: "Yoxdur (özül fənndir)", en: "None (foundation subject)" },
      hours: 24,
      difficulty: "FOUNDATION",
      skills: {
        az: ["ITP hazırlama", "NCR yazma", "Kök səbəb təhlili", "İnspeksiya sənədləşdirməsi"],
        en: ["ITP preparation", "NCR writing", "Root-cause analysis", "Inspection documentation"]
      },
      applications: {
        az: "Beton tökümü, armatur inspeksiyası, material qəbulu və təhvil mərhələsində gündəlik istifadə olunur.",
        en: "Used daily during concrete pours, rebar inspection, material receiving and the handover stage."
      },
      resources: [
        {
          title: "How to Become a QA/QC Engineer — Full Course (YouTube)",
          org: "YouTube — construction quality training channel",
          type: { az: "Video kurs (YouTube)", en: "Video course (YouTube)" },
          why: { az: "Sahə inspeksiya checklist-lərinin real nümunələrini göstərir.", en: "Shows real examples of site inspection checklists." }
        },
        {
          title: "Introduction to Design and Construction Quality Management",
          org: "ASCE (American Society of Civil Engineers)",
          type: { az: "Peşəkar kurs", en: "Professional course" },
          why: { az: "QA və QC arasındakı fərqi və sənaye standartlarını rəsmi mənbədən izah edir.", en: "Explains the QA vs QC distinction and industry standards from an authoritative source." }
        }
      ],
      modules: {
        az: ["Modul 1 — QA vs QC və keyfiyyət planı", "Modul 2 — ITP və inspeksiya səviyyələri", "Modul 3 — NCR yaradılması və təsnifatı", "Modul 4 — Kök səbəb təhlili", "Modul 5 — Keyfiyyət sənədləşdirməsi"],
        en: ["Module 1 — QA vs QC and the quality plan", "Module 2 — ITP and inspection levels", "Module 3 — Creating and classifying an NCR", "Module 4 — Root-cause analysis", "Module 5 — Quality documentation"]
      },
      tasks: [
        {
          id: "qaqc-t1", difficulty: "FOUNDATION",
          title: { az: "Tapşırıq 1 — Beton Tökümü üçün ITP", en: "Task 1 — ITP for a Concrete Pour" },
          role: { az: "Siz QA/QC Coordinator rolundasınız.", en: "You are acting as a QA/QC Coordinator." },
          scenario: { az: "Döşəmə betonu tökümü üçün ITP hazırlamalısınız: qəlib yoxlaması, armatur yoxlaması, beton tökümü, kürəmə (curing).", en: "You must prepare an ITP for a slab concrete pour: formwork check, rebar check, the pour itself, and curing." },
          mentor: { az: "Hold Point — icra davam etmədən əvvəl mütləq təsdiq tələb edir (məs. armatur yoxlaması betondan əvvəl). Witness Point — nəzarətçi iştirak edə bilər, amma iştirak etməsə də iş dayanmır.", en: "A Hold Point requires mandatory sign-off before work can continue (e.g. rebar check before concrete). A Witness Point allows the inspector to attend, but work isn't stopped if they don't." },
          instructions: { az: "4 mərhələni (qəlib, armatur, tökümü, kürəmə) Hold Point və ya Witness Point kimi təsnif edin və səbəbini yazın.", en: "Classify the 4 stages (formwork, rebar, pour, curing) as Hold Point or Witness Point and explain why." },
          format: { az: "Excel və ya cədvəl", en: "Excel or table" },
          time: { az: "35 dəqiqə", en: "35 minutes" },
          criteria: { az: ["Təsnifat düzgündür", "Səbəblər əsaslandırılıb"], en: ["Classification is correct", "Reasons are justified"] },
          check: { type: "mc", question: { az: "Armatur yoxlaması betondan ƏVVƏL mütləq təsdiqlənməlidirsə, bu hansı nöqtə növüdür?", en: "If rebar inspection must be mandatorily approved BEFORE concrete, what type of point is this?" }, options: { az: ["Witness Point", "Hold Point", "Random Point"], en: ["Witness Point", "Hold Point", "Random Point"] }, correct: 1 }
        },
        {
          id: "qaqc-t2", difficulty: "INTERMEDIATE",
          title: { az: "Tapşırıq 2 — NCR Yazılması", en: "Task 2 — Writing an NCR" },
          role: { az: "Siz QA/QC Engineer rolundasınız.", en: "You are acting as a QA/QC Engineer." },
          scenario: { az: "İnspeksiya zamanı divar armaturunun layihə çertyojundan fərqli aralıqla qoyulduğu aşkarlanır — struktur təhlükəsizliyinə birbaşa təsir edir.", en: "During inspection, wall rebar is found spaced differently than the design drawing — this directly affects structural safety." },
          mentor: { az: "NCR-in kateqoriyası (Major/Minor) təsirin ciddiliyinə görə müəyyən edilir. Struktur təhlükəsizliyinə təsir edən uyğunsuzluq həmişə Major sayılır.", en: "An NCR's category (Major/Minor) is determined by the severity of impact. A non-conformance affecting structural safety is always Major." },
          instructions: { az: "NCR sənədi yazın: təsvir, kateqoriya (Major/Minor), təklif olunan düzəliş tədbiri.", en: "Write the NCR document: description, category (Major/Minor), proposed corrective action." },
          format: { az: "Qısa sənəd (Word/PDF)", en: "Short document (Word/PDF)" },
          time: { az: "30 dəqiqə", en: "30 minutes" },
          criteria: { az: ["Təsvir dəqiqdir", "Kateqoriya düzgündür", "Düzəliş tədbiri realdır"], en: ["Description is precise", "Category is correct", "Corrective action is realistic"] },
          check: { type: "mc", question: { az: "Struktur təhlükəsizliyinə birbaşa təsir edən armatur xətası hansı NCR kateqoriyasına aiddir?", en: "A rebar error that directly affects structural safety falls under which NCR category?" }, options: { az: ["Minor", "Major", "Observation"], en: ["Minor", "Major", "Observation"] }, correct: 1 }
        },
        {
          id: "qaqc-t3", difficulty: "ADVANCED",
          title: { az: "Tapşırıq 3 — Kök Səbəb Təhlili (5 Why)", en: "Task 3 — Root-Cause Analysis (5 Whys)" },
          role: { az: "Siz Quality Engineer rolundasınız.", en: "You are acting as a Quality Engineer." },
          scenario: { az: "Son bir ayda eyni sahədə 3 dəfə beton keyfiyyət testi uğursuz olub. Menecer sizdən kök səbəbi tapmağı istəyir.", en: "In the last month, concrete quality tests have failed 3 times in the same area. The manager asks you to find the root cause." },
          mentor: { az: "5 Why metodu — 'niyə?' sualını təkrar verərək simptomdan kök səbəbə doğru irəliləyir. Ümumi səhv: ilk cavabda (məs. 'işçi səhv etdi') dayanmaq — bu adətən simptomdur, kök səbəb deyil.", en: "The 5 Whys method repeatedly asks 'why?' to move from symptom to root cause. Common mistake: stopping at the first answer (e.g. 'the worker made a mistake') — that's usually a symptom, not the root cause." },
          instructions: { az: "5 Why analizini aparın (ən azı 4 səviyyə) və son nəticədə sistemli (proses/təchizat/təlim) kök səbəbə çatın.", en: "Conduct the 5 Whys analysis (at least 4 levels deep) and arrive at a systemic (process/supply/training) root cause." },
          format: { az: "Qısa hesabat", en: "Short report" },
          time: { az: "40 dəqiqə", en: "40 minutes" },
          criteria: { az: ["Ən azı 4 səviyyə var", "Son səbəb sistemlidir, insan səhvi ilə bitmir"], en: ["At least 4 levels deep", "Final cause is systemic, doesn't end at human error"] },
          check: { type: "mc", question: { az: "5 Why təhlili adətən hansı səviyyədə dayanmamalıdır?", en: "At which level should a 5 Whys analysis usually NOT stop?" }, options: { az: ["Sistemli proses səbəbi", "İlk 'işçi səhv etdi' cavabı", "Təchizat zənciri səbəbi"], en: ["A systemic process cause", "The first 'worker made a mistake' answer", "A supply-chain cause"] }, correct: 1 }
        }
      ],
      assessment: {
        az: "Hər tapşırıq rubrik üzrə qiymətləndirilir. Minimum 70% tələb olunur.",
        en: "Each task is graded against a rubric. 70% minimum is required."
      },
      challengeExam: {
        az: "QA/QC əsaslarını bilən tələbələr üçün 15 sualdan ibarət Challenge Exam mövcuddur.",
        en: "A 15-question Challenge Exam is available for students who already know QA/QC basics."
      }
    },
    "materials-101": { code: "MAT-101", title: { az: "Tikinti Materialları", en: "Construction Materials" }, hours: 18, difficulty: "FOUNDATION", stub: true },
    "docs-101": { code: "DOC-101", title: { az: "Mühəndis Sənədləşdirməsi", en: "Engineering Documentation" }, hours: 14, difficulty: "FOUNDATION", stub: true },
    "risk-101": { code: "RSK-101", title: { az: "Risklərin İdarə Edilməsi", en: "Risk Management" }, hours: 14, difficulty: "PROFESSIONAL", stub: true },
    "capstone-qaqc": { code: "CAP-QAQC", title: { az: "Yekun Layihə: QA/QC Sistemi", en: "Capstone: QA/QC System" }, hours: 28, difficulty: "ADVANCED", stub: true },

    "cost-101": { code: "COST-101", title: { az: "Xərc Nəzarətinin Əsasları", en: "Cost Control Fundamentals" }, hours: 22, difficulty: "FOUNDATION", stub: true },
    "qto-101": { code: "QTO-101", title: { az: "Kəmiyyət Çıxarışı", en: "Quantity Takeoff" }, hours: 18, difficulty: "FOUNDATION", stub: true },
    "procurement-101": { code: "PROC-101", title: { az: "Satınalma Əsasları", en: "Procurement Fundamentals" }, hours: 14, difficulty: "PROFESSIONAL", stub: true },
    "capstone-cost": { code: "CAP-COST", title: { az: "Yekun Layihə: Xərc Nəzarəti Cədvəli", en: "Capstone: Cost Control Workbook" }, hours: 28, difficulty: "ADVANCED", stub: true },

    "hse-101": { code: "HSE-101", title: { az: "HSE-nin Əsasları", en: "HSE Fundamentals" }, hours: 20, difficulty: "FOUNDATION", stub: true },
    "surveying-101": { code: "SUR-101", title: { az: "Geodeziyanın Əsasları", en: "Surveying Fundamentals" }, hours: 18, difficulty: "FOUNDATION", stub: true },
    "civil-eng-101": { code: "CIV-101", title: { az: "Mülki Mühəndisliyin Əsasları", en: "Civil Engineering Fundamentals" }, hours: 24, difficulty: "FOUNDATION", stub: true },
    "bim-101": { code: "BIM-101", title: { az: "BIM-in Əsasları", en: "BIM Fundamentals" }, hours: 20, difficulty: "PROFESSIONAL", stub: true },
    "estimation-101": { code: "EST-101", title: { az: "Smeta İşinin Əsasları", en: "Estimation Fundamentals" }, hours: 20, difficulty: "PROFESSIONAL", stub: true },
    "tech-office-101": { code: "TO-101", title: { az: "Texniki Ofis İşinin Əsasları", en: "Technical Office Fundamentals" }, hours: 16, difficulty: "FOUNDATION", stub: true },
    "digital-const-101": { code: "DIG-101", title: { az: "Rəqəmsal Tikinti Alətləri", en: "Digital Construction Tools" }, hours: 16, difficulty: "PROFESSIONAL", stub: true },
    "ai-const-101": { code: "AIC-101", title: { az: "Tikintidə AI Alətləri", en: "AI Tools for Construction" }, hours: 16, difficulty: "ADVANCED", stub: true },
    "leadership-101": { code: "LDR-101", title: { az: "Liderlik Əsasları", en: "Leadership Fundamentals" }, hours: 18, difficulty: "ADVANCED", stub: true },

    "capstone-cm": { code: "CAP-CM", title: { az: "Yekun Layihə: Sahə İdarəetməsi Simulyasiyası", en: "Capstone: Simulated Site Management" }, hours: 30, difficulty: "ADVANCED", stub: true },
    "capstone-planning": { code: "CAP-PLN", title: { az: "Yekun Layihə: Tam Layihə Cədvəli", en: "Capstone: Full Project Schedule" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-hse": { code: "CAP-HSE", title: { az: "Yekun Layihə: HSE İdarəetmə Paketi", en: "Capstone: HSE Management Package" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-site-eng": { code: "CAP-SEN", title: { az: "Yekun Layihə: Sahə Mühəndisliyi Portfeli", en: "Capstone: Site Engineering Portfolio" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-const-eng": { code: "CAP-CEN", title: { az: "Yekun Layihə: Metod Bəyanatı Paketi", en: "Capstone: Method Statement Package" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-qs": { code: "CAP-QS", title: { az: "Yekun Layihə: Tam BOQ və Ödəniş Sertifikatı", en: "Capstone: Full BOQ & Payment Certificate" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-bim": { code: "CAP-BIM", title: { az: "Yekun Layihə: BIM Əlaqələndirmə Paketi", en: "Capstone: BIM Coordination Package" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-civil": { code: "CAP-CIV", title: { az: "Yekun Layihə: Struktur Elementlərin Təhlili", en: "Capstone: Structural Element Review" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-contracts": { code: "CAP-CON", title: { az: "Yekun Layihə: İddia (Claim) Paketi", en: "Capstone: Claim Package" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-procurement": { code: "CAP-PRC", title: { az: "Yekun Layihə: Satınalma İzləyicisi", en: "Capstone: Procurement Tracker" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-estimation": { code: "CAP-EST", title: { az: "Yekun Layihə: Tam Layihə Smetası", en: "Capstone: Full Project Estimate" }, hours: 26, difficulty: "ADVANCED", stub: true },
    "capstone-surveying": { code: "CAP-SUR", title: { az: "Yekun Layihə: As-Built Ölçmə Hesabatı", en: "Capstone: As-Built Survey Report" }, hours: 22, difficulty: "ADVANCED", stub: true },
    "capstone-tech-office": { code: "CAP-TO", title: { az: "Yekun Layihə: Sənəd Nəzarəti Sistemi", en: "Capstone: Document Control System" }, hours: 22, difficulty: "ADVANCED", stub: true },
    "capstone-digital": { code: "CAP-DIG", title: { az: "Yekun Layihə: Rəqəmsal Dashboard", en: "Capstone: Digital Dashboard" }, hours: 22, difficulty: "ADVANCED", stub: true },
    "capstone-ai": { code: "CAP-AI", title: { az: "Yekun Layihə: AI-dəstəkli Hesabat Alətinin Qurulması", en: "Capstone: AI-Assisted Reporting Tool" }, hours: 22, difficulty: "ADVANCED", stub: true },
    "capstone-leadership": { code: "CAP-LDR", title: { az: "Yekun Layihə: Komanda İdarəetmə Ssenarisi", en: "Capstone: Team Management Scenario" }, hours: 22, difficulty: "ADVANCED", stub: true }
  }
};
