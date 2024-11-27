export enum UserRole {
    Student = "student",
    Instructor = "instructor",
    Admin = "admin",
}

export enum PaymentMethod {
    CreditCard = "credit_card",
    PayPal = "paypal",
    BankTransfer = "bank_transfer",
}

export enum PaymentStatus {
    Pending = "pending",
    Success = "success",
    Failed = "failed",
}

export enum CourseCategory {
    // Development and Programming
    WebDevelopment = "web_development",
    MobileDevelopment = "mobile_development",
    SoftwareEngineering = "software_engineering",
    DataScience = "data_science",
    ArtificialIntelligence = "artificial_intelligence",
    Cybersecurity = "cybersecurity",
    GameDevelopment = "game_development",
    DevOps = "devops",
    ProgrammingLanguages = "programming_languages",

    // Business and Management
    BusinessManagement = "business_management",
    ProjectManagement = "project_management",
    Marketing = "marketing",
    Finance = "finance",
    HumanResources = "human_resources",
    Leadership = "leadership",
    Entrepreneurship = "entrepreneurship",

    // Design and Creative Arts
    GraphicDesign = "graphic_design",
    UIUXDesign = "ui_ux_design",
    WebDesign = "web_design",
    DigitalMarketing = "digital_marketing",
    Photography = "photography",
    Videography = "videography",
    MusicProduction = "music_production",
    ArtAndIllustration = "art_and_illustration",

    // IT and Networking
    Networking = "networking",
    CloudComputing = "cloud_computing",
    ITSupport = "it_support",
    DatabaseAdministration = "database_administration",
    ITSecurity = "it_security",

    // Personal Development
    PersonalDevelopment = "personal_development",
    Productivity = "productivity",
    TimeManagement = "time_management",
    Mindfulness = "mindfulness",
    HealthAndWellness = "health_and_wellness",
    LanguageLearning = "language_learning",

    // Science and Mathematics
    Mathematics = "mathematics",
    Physics = "physics",
    Chemistry = "chemistry",
    Biology = "biology",

    // Humanities
    History = "history",
    Philosophy = "philosophy",
    Literature = "literature",
    Psychology = "psychology",
    Sociology = "sociology",

    // Other
    ITCertification = "it_certification",
    ProfessionalCertification = "professional_certification",
    Hobbies = "hobbies",
}

export enum ContentType {
    Text = "text",
    Video = "video",
    Quiz = "quiz",
    Document = "document",
    // ... other content types as needed
}

export enum SkillLevel {
    All = "all Levels",
    Beginner = "beginner",
    Advanced = "advanced",
    Expert = "expert",
}

export enum Reaction {
    Like = "thumbs_up",
    Dislike = "thumbs_down",
    Heart = "love",
    Rocket = "rocket",
    Genius = "bulb",
    // ... other content types as needed
}
