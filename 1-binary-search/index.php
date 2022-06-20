<?php
function binarySearch($list, $item)
{
  $low = 0;
  $high = count($list) - 1;

  while ($low <= $high) {
    $mid = floor(($low + $high) / 2);
    $guess = $list[$mid];

    if ($guess === $item) {
      return $mid;
    }

    if ($guess > $item) {
      $high = $mid - 1;
    } else {
      $low = $mid - 1;
    }

    return null;
  }
}


$myList = [1, 3, 5, 7, 9];

var_dump(binarySearch($myList, 3));
var_dump(binarySearch($myList, -1));
