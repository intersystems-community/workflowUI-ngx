import get from 'lodash-es/get';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'getPipe'})
export class GetPipe implements PipeTransform  {
    constructor() {}
    transform(object: any, route: string): string {
        return get(object, route);
    }
}
