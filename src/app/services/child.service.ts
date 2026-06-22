import { Injectable } from '@angular/core';
import { MOCK_CHILDREN } from '../mocks/mock-children';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  getChildren() {
    return MOCK_CHILDREN;
  }

  getChildById(id: string) {
    return MOCK_CHILDREN.find(c => c.id === id);
  }
}