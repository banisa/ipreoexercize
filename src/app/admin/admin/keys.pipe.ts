import { PipeTransform, Pipe } from '@angular/core'; 

@Pipe(
    {
        name: 'hasPermission'
    }
)

export class PermissionsPipe implements PipeTransform {
  transform(value, arg:number) : string {
    if(arg != 0){
        return 'checked';
    }
    else{
        return '';
    }
  }
}