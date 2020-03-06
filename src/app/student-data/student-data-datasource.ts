import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


export interface StudentDataItem {
  name: string;
  id: number;
  subject1: string;
  subject2: string;
  subject3: string;
}


export const EXAMPLE_DATA: StudentDataItem[] = [
  {id: 1, name: 'Dipesh', subject1 : "100%", subject2: "100%", subject3: "100%" },
  {id: 2, name: 'Priyal', subject1 : "100%", subject2: "100%", subject3: "100%" },
  {id: 3, name: 'Aneesh', subject1 : "25%", subject2: "60%", subject3: "53%" },
  {id: 4, name: 'Arvind', subject1 : "88%", subject2: "40%", subject3: "60%" },
  {id: 5, name: 'Saurabh', subject1 : "23%", subject2: "29%", subject3: "63%" },
  {id: 6, name: 'Prakash', subject1 : "34%", subject2: "23%", subject3: "52%" },
  {id: 7, name: 'Sanket', subject1 : "65%", subject2: "56%", subject3: "74%" },
  {id: 8, name: 'Ashley', subject1 : "60%", subject2: "67%", subject3: "73%" },
  {id: 9, name: 'Jibin', subject1 : "23%", subject2: "23%", subject3: "77%" },
  {id: 10, name: 'Dhanush', subject1 : "54%", subject2: "67%", subject3: "53%" },
  {id: 11, name: 'Toju', subject1 : "32%", subject2: "23%", subject3: "93%" },
  {id: 12, name: 'Sun', subject1 : "76%", subject2: "76%", subject3: "82%" },
  {id: 13, name: 'Bineesh', subject1 : "32%", subject2: "34%", subject3: "72%" },
  {id: 14, name: 'Shyam', subject1 : "76%", subject2: "54%", subject3: "92%" },
  {id: 15, name: 'Sandeep', subject1 : "90%", subject2: "76%", subject3: "92%" },
  {id: 16, name: 'Pragati', subject1 : "76%", subject2: "43%", subject3: "92%" },
  {id: 17, name: 'Payal', subject1 : "32%", subject2: "56%", subject3: "98%" },
  {id: 18, name: 'Gagan', subject1 : "23%", subject2: "56%", subject3: "72%" },
  {id: 19, name: 'Ayushi', subject1 : "89%", subject2: "50%", subject3: "72%" },
  {id: 20, name: 'Arpita', subject1 : "99%", subject2: "45%", subject3: "87%" },
];

/**
 * Data source for the StudentData view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class StudentDataDataSource extends DataSource<StudentDataItem> {
  data: StudentDataItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<StudentDataItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: StudentDataItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: StudentDataItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


