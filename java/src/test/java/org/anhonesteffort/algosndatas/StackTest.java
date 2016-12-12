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

import org.junit.Test;

public class StackTest {

  @Test
  public void test() {
    final Stack<Integer> STACK = new Stack<>();

    assert STACK.peek() == null;
    assert STACK.pop()  == null;

    STACK.push(1);
    STACK.push(2);
    STACK.push(3);

    assert STACK.peek() == 3;
    assert STACK.pop()  == 3;

    STACK.push(4);

    assert STACK.peek() == 4;
    assert STACK.pop()  == 4;
    assert STACK.peek() == 2;
    assert STACK.pop()  == 2;
    assert STACK.peek() == 1;
    assert STACK.pop()  == 1;

    assert STACK.peek() == null;
    assert STACK.pop()  == null;

    STACK.push(5);

    assert STACK.peek() == 5;
    assert STACK.pop()  == 5;
  }

}
