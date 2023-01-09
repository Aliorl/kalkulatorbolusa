<?php
require_once 'config/obsluga_sesji.php';
include_once 'config/settings.php';

$a = isset($_POST['a']) ? (float)$_POST['a'] : 50.0;
$b = isset($_POST['b']) ? (float)$_POST['b'] : 100.0;
$c = isset($_POST['c']) ? (float)$_POST['c'] : 1.0;
$d = isset($_POST['d']) ? (float)$_POST['d'] : 0.0;
$e = isset($_POST['e']) ? (float)$_POST['e'] : 0.0;

if (
    ($a || $a === 0.0) &&
    ($b || $b === 0.0) &&
    ($c || $c === 0.0) &&
    ($d || $d === 0.0) &&
    ($e || $e === 0.0) &&
    is_numeric($a) &&
    is_numeric($b) &&
    is_numeric($c) &&
    is_numeric($d) &&
    is_numeric($e)
    )
{
    $g=$d-$b;
    $h=$g/$a;
    $i=$e*$c;
    $wynik=round($h+$i,1,PHP_ROUND_HALF_UP);
}
else
{
    $wynik=0.0;
}

include_once 'witryna.html';