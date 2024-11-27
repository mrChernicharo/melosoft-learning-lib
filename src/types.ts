import { UserRole, CourseCategory, PaymentMethod, PaymentStatus, ContentType, SkillLevel, Reaction } from "./enums";

export interface Org {
    id: string;
    name: string;
    imageUrl: string; // URL to the organization's logo or image
    createdAt: Date;
    updatedAt: Date;
}

export interface User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    roles: UserRole[];
    imageUrl: string; // URL to the user's profile picture
    links: string[]; // homepage, youtube, linkedin, github, twitter etc..
    createdAt: Date;
    updatedAt: Date;
    orgId?: string; // if admin or instructor
    jobTitle?: string; // if instructor
}

export interface InstructorRating {
    id: string;
    userId: string;
    instructorId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Course {
    id: string;
    orgId: string;
    instructorId: string;
    title: string;
    description: string;
    category: CourseCategory;
    skillLevel: SkillLevel;
    language: string;
    price: number;
    isPublished: boolean;
    imageUrl: string; // URL to the course's thumbnail or cover image
    createdAt: Date;
    updatedAt: Date;
}

export interface CourseSection {
    id: string;
    courseId: string;
    title: string;
    description: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface CourseRating {
    id: string;
    userId: string;
    courseId: string;
    rating: number;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CourseAnnouncement {
    id: string;
    instructorId: string;
    courseId: string;
    comment: string; // markdown
    createdAt: Date;
    updatedAt: Date;
}

export interface UserCourseProgress {
    userId: string;
    courseId: string;
    completedLessons: string[]; // Array of lesson IDs
    enrolledAt: Date;
    lastAccessed: Date;
}

export interface Lesson {
    id: string;
    title: string;
    description: string;
    courseId: string;
    courseSectionId: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface LessonContent {
    id: string;
    lessonId: string;
    contentType: ContentType;
    content: string | object; // Can be text, video URL, or other JSON object
    order: number;
    createdAt: Date;
    updatedAt: Date;
}
// Q&A
export interface LessonPost {
    id: string;
    lessonId: string;
    userId: string;
    title: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface LessonComment {
    id: string;
    postId: string;
    userId: string;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
    quotedCommentId?: string;
}

export interface CommentReactions {
    id: string;
    commentId: string;
    reaction: Reaction;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Payment {
    id: string;
    userId: string;
    courseId: string;
    amount: number;
    paymentMethod: PaymentMethod;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface Certificate {
    id: string;
    userId: string;
    courseId: string;
    issuedAt: Date;
    certificateUrl: string; // URL to the certificate PDF or other format
}

export interface Notification {
    id: string;
    userId: string;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
}
