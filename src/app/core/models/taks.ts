export interface Task {
    action?: string;
    actions?: string;
    formFields: {[key: string]: string};
    id: string;
    isNew: boolean;
    message: string;
    priority: number;
    role: string;
    subject: string;
    timeCreated: string;
}
