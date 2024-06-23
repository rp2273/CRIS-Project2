import { Component } from '@angular/core';

interface RowData {
  projectName: string;
  sourceToDest: string;
  destToSource: string;
  editable: boolean;
}

@Component({
  selector: 'app-project2-integration-table',
  templateUrl: './project2-integration-table.component.html',
  styleUrl: './project2-integration-table.component.css'
})
export class Project2IntegrationTableComponent {
  rows: RowData[] = [];
  jsonOutput: string = '';

  constructor() {
    this.rows = [];
    this.jsonOutput = '';
  }

  addRow() {
    this.rows.push({ projectName: '', sourceToDest: '', destToSource: '', editable: true });
  }

  deleteRow(index: number) {
    this.rows.splice(index, 1);
  }

  modifyRow(index: number) {
    this.rows[index].editable = !this.rows[index].editable;
  }

  generateJSON() {
    const data: any[] = this.rows.map(row => ({
      projectName: row.projectName,
      sourceToDest: row.sourceToDest,
      destToSource: row.destToSource
    }));

    this.jsonOutput = JSON.stringify(data, null, 2);

    // Create a Blob from the JSON string and download it as a file
    const blob = new Blob([this.jsonOutput], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'integration_data.json';
    link.click();
  }
}
