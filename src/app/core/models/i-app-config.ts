import {SelectItem} from 'primeng/api';

export interface IAppConfig {
    LANGUAGES: SelectItem[];
    MAIN_APP_LOGIN_URL: string;
    REST_API_URL: string;
    TASKS_LIMIT: number;
}
