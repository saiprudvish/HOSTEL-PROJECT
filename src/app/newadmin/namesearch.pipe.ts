import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesearch'
})
export class NamesearchPipe implements PipeTransform {

  transform(students:any[],searchTerm:string):any[]{
    if(!students ||!searchTerm) {
      return students;
   
    }
    else{
      return students.filter(studentsObj=>studentsObj.rno.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
      
    }

  
  }

}
