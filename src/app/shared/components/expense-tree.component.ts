import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { EmployeeWithExpense, Employee } from 'src/app/features/dashboard/model/Department';

@Component({
    selector: 'expense-tree',
    templateUrl: './expense-tree.component.html',
    styleUrls:['./expense-tree.component.scss']
})

export class ExpenseTreeComponent implements OnInit {
    treeControl = new NestedTreeControl<EmployeeWithExpense>(node => node.reportee);
    dataSource = new MatTreeNestedDataSource<EmployeeWithExpense>();
    hasChild = (_: number, node: Employee) => !!node.reportee && node.reportee.length > 0;
    @Input()
    set data(val:EmployeeWithExpense[]){
        this.dataSource.data=val;
    }
    
    ngOnInit() { }
}