import { Component,inject} from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-important-task',
  standalone: true,
  imports: [PageTitleComponent,TaskListComponent],
  templateUrl: './important-task.component.html',
  styleUrl: './important-task.component.scss'
})
export class ImportantTaskComponent {
  newTask = '';
  taskList:any[]=[]
  httpService = inject(HttpService);
  ngOnInit(){
    this.getAllTask()
  }
  getAllTask(){
    this.httpService.getAllTask().subscribe((result:any)=>{
     this.taskList=result.filter((x:any)=>x.important==true)

    })
  }
  onComplete(task:any){
    task.completed=true
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTask()
    })
    
  }
  onImportant(task:any){
    task.important=true
    this.httpService.updateTask(task).subscribe(()=>{
      this.getAllTask()
    })
  }
}
