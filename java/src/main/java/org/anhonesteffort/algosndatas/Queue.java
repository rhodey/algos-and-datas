/*
 * Copyright (C) 2016 An Honest Effort LLC.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.anhonesteffort.algosndatas;

/*
  QUEUES ARE FIRST IN FIRST OUT.
 */
public class Queue<T> {

  private Item<T> head = null;
  private Item<T> tail = null;

  public void enqueue(T value) {
    if (head == null) {
      head = new Item<>(value);
      tail = head;
    } else {
      head.left = new Item<>(value);
      head      = head.left;
    }
  }

  public T peek() {
    return (tail != null) ? tail.value : null;
  }

  public T dequeue() {
    if (tail != null && tail.left != null) {
      T value = tail.value;
      tail = tail.left;
      return value;
    } else if (tail != null) {
      T value = tail.value;
      head = tail = null;
      return value;
    } else {
      return null;
    }
  }

  private class Item<V extends T> {
    private final V value;
    private Item<V> left;

    public Item(V value) {
      this.value = value;
    }
  }

}
