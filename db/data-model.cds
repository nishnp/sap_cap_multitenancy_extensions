namespace my.bookshop;


@odata.draft.enabled
entity Books {
  time : Timestamp @cds.on.insert:$now;
  key ID : Integer;
  title  : String;
  stock  : Integer;
}
