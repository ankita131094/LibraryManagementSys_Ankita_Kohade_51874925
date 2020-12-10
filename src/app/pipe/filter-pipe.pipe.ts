import { Pipe, PipeTransform } from '@angular/core';
import { Users } from '../_model/users';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(users : Users[],searchBooks:string): Users[] {
    if(!users || !searchBooks ){
      return users;
    }
    return users.filter(res => 
          res.Title.toLocaleLowerCase().includes(searchBooks.toLocaleLowerCase())
      ||  res.Author.toLocaleLowerCase().includes(searchBooks.toLocaleLowerCase())
      ||  res.Subject.toLocaleLowerCase().includes(searchBooks.toLocaleLowerCase())
      ||  res.Rack_No.toString().includes(searchBooks.toString())
   
  );
    }

}
