#! /usr/bin/perl
use strict;
use warnings;
use CGI;

my $cgi = CGI->new;
print "Content-type: text/html\n\n";
print <<HTML;
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script type="text/javascript" charset="UTF-8" src="http://static.mixi.jp/js/application/connect.js"></script>
  <script type="text/javascript" src='http://rossispiegare.sakura.ne.jp/mixiapp/mixi_community_search/zepto.min.js'></script>
  <script type="text/javascript" src='http://rossispiegare.sakura.ne.jp/mixiapp/mixi_community_search/init_mixiapp.js'></script>
  <script type="text/javascript" src='http://rossispiegare.sakura.ne.jp/mixiapp/mixi_community_search/init.js'></script>
  <script type="text/javascript" src='http://rossispiegare.sakura.ne.jp/mixiapp/mixi_community_search/model.js'></script>
  <script type="text/javascript" src='http://rossispiegare.sakura.ne.jp/mixiapp/mixi_community_search/view.js'></script>
  <script type="text/javascript" src='http://rossispiegare.sakura.ne.jp/mixiapp/mixi_community_search/controller.js'></script>
  <script type="text/javascript" src='http://rossispiegare.sakura.ne.jp/mixiapp/mixi_community_search/mixi_app_jsapi_wrapper.js'></script>
  <title>コミュニティ検索</title>
</head>
<body>
  <h1>コミュニティ検索</h1>
  <div id='navigator'>
    <input id='search_form' type='text' />
    <button>検索</button>
  </div>
  <div id='container'></div>
</body>
</html>
HTML

