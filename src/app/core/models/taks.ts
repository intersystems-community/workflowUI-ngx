export interface Task {
    action?: string;
    actions?: string;
    formFields?: any;
    id: string;
    isNew: boolean;
    message: string;
    priority: number;
    role: string;
    subject: string;
    timeCreated: string;
}
