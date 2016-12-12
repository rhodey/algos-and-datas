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

public class QueueTest {

  @Test
  public void test() {
    final Queue<Integer> QUEUE = new Queue<>();

    assert QUEUE.peek()    == null;
    assert QUEUE.dequeue() == null;

    QUEUE.enqueue(1);
    QUEUE.enqueue(2);
    QUEUE.enqueue(3);

    assert QUEUE.peek()    == 1;
    assert QUEUE.dequeue() == 1;

    QUEUE.enqueue(4);

    assert QUEUE.peek()    == 2;
    assert QUEUE.dequeue() == 2;
    assert QUEUE.peek()    == 3;
    assert QUEUE.dequeue() == 3;
    assert QUEUE.peek()    == 4;
    assert QUEUE.dequeue() == 4;

    assert QUEUE.peek()    == null;
    assert QUEUE.dequeue() == null;

    QUEUE.enqueue(5);

    assert QUEUE.peek()    == 5;
    assert QUEUE.dequeue() == 5;
  }

}
