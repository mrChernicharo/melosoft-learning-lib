export enum OrgUserRole {
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

export enum ContentType {
    Text = "text",
    Video = "video",
    Quiz = "quiz",
    Document = "document",
    // ... other content types as needed
}

export enum SkillLevel {
    All = "all_levels",
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

export enum VerificationCodeType {
    Login = "login",
    PasswordReset = "password_reset",
}

// export enum PasswordType {
//     UserCredential = "user_credential",
//     RecoveryCode = "recovery_code",
// }
