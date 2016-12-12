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
  STACKS ARE LAST IN FIRST OUT.
 */
public class Stack<T> {

  private Item<T> top;

  public void push(T value) {
    if (top == null) {
      top = new Item<>(value, null);
    } else {
      top = new Item<>(value, top);
    }
  }

  public T peek() {
    return (top != null) ? top.value : null;
  }

  public T pop() {
    if (top != null) {
      T value = top.value;
      top = top.next;
      return value;
    } else {
      return null;
    }
  }

  private class Item<V extends T> {
    private final V value;
    private final Item<V> next;

    public Item(V value, Item<V> next) {
      this.value = value;
      this.next  = next;
    }
  }

}
