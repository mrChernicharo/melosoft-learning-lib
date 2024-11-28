import {
    CourseCategory,
    PaymentMethod,
    PaymentStatus,
    ContentType,
    SkillLevel,
    Reaction,
    OrgUserRole,
    PasswordType,
} from "./enums";

export interface Org {
    id: number;
    name: string;
    image_url: string;
    created_at: Date;
    updated_at: Date;
}
export interface OrgUser {
    id: number;
    org_id: number;
    user_id: number;
    role: OrgUserRole;
}

export interface User {
    id: number;
    name: string;
    email: string;
    image_url: string;
    links: string[]; // homepage, youtube, linkedin, github, twitter etc..
    job_title?: string; // if instructor
    created_at: Date;
    updated_at: Date;
}

export interface Password {
    id: number;
    user_id: number;
    password: string;
    salt: string;
    image_url: string;
    type: PasswordType; // if instructor
    created_at: Date;
    updated_at: Date;
}

export interface InstructorRating {
    id: number;
    user_id: number;
    instructor_id: number;
    rating: number;
    comment: string;
    created_at: Date;
    updated_at: Date;
}

export interface Course {
    id: number;
    org_id: number;
    instructor_id: number;
    title: string;
    description: string;
    category: CourseCategory; // <-- consider sub-categories in the future
    skillLevel: SkillLevel;
    language: string;
    price: number;
    is_published: boolean;
    image_url: string; // URL to the course's thumbnail or cover image
    created_at: Date;
    updated_at: Date;
}

export interface CourseSection {
    id: number;
    course_id: number;
    title: string;
    description: string;
    order: number;
    created_at: Date;
    updated_at: Date;
}

export interface CourseRating {
    id: number;
    user_id: number;
    course_id: number;
    rating: number;
    comment: string;
    created_at: Date;
    updated_at: Date;
}

export interface CourseAnnouncement {
    id: number;
    instructor_id: number;
    course_id: number;
    comment: string; // markdown
    created_at: Date;
    updated_at: Date;
}

export interface UserCourseProgress {
    user_id: number;
    course_id: number;
    completed_lessons: string[]; // Array of lesson IDs
    enrolled_at: Date;
    last_accessed: Date;
}

export interface Lesson {
    id: number;
    title: string;
    description: string;
    course_id: number;
    course_section_id: number;
    order: number;
    created_at: Date;
    updated_at: Date;
}

export interface LessonContent {
    id: number;
    lesson_id: number;
    content_type: ContentType;
    content: string | object; // Can be text, video URL, or other JSON object
    order: number;
    created_at: Date;
    updated_at: Date;
}
// Q&A
export interface LessonPost {
    id: number;
    lesson_id: number;
    user_id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
}

export interface LessonComment {
    id: number;
    postId: number;
    user_id: number;
    comment: string;
    created_at: Date;
    updated_at: Date;
    quoted_comment_id?: string;
}

export interface CommentReactions {
    id: number;
    comment_id: number;
    reaction: Reaction;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface Payment {
    id: number;
    user_id: number;
    course_id: number;
    amount: number;
    paymentMethod: PaymentMethod;
    status: PaymentStatus;
    created_at: Date;
    updated_at: Date;
}

export interface Certificate {
    id: number;
    user_id: number;
    course_id: number;
    issuedAt: Date;
    url: string; // URL to the certificate PDF or other format
}

export interface Notification {
    id: number;
    user_id: number;
    title: string;
    message: string;
    isRead: boolean;
    created_at: Date;
    updated_at: Date;
}
