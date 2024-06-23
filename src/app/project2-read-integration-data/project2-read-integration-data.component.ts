import { Component } from '@angular/core';

@Component({
  selector: 'app-project2-read-integration-data',
  templateUrl: './project2-read-integration-data.component.html',
  styleUrl: './project2-read-integration-data.component.css'
})
export class Project2ReadIntegrationDataComponent {
  tableData: any[] = [];

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const jsonData = JSON.parse(e.target.result);
      this.tableData = jsonData;
    };
    reader.readAsText(file);
  }
}
