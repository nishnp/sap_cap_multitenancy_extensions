namespace my.bookshop;

entity Books {
  time : Timestamp @cds.on.insert:$now;
  key ID : Integer;
  title  : String;
  stock  : Integer;
}
