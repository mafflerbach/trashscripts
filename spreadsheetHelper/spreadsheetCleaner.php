<?php

function getFiles() {
  $files = array();
  foreach (new DirectoryIterator('files') as $fileInfo) {
    if ($fileInfo->isDot()) continue;
    if (strpos($fileInfo, '.html') !== FALSE) {
      $files[] = 'files/' . $fileInfo->getFilename();
    }
  }
  return $files;
}

function remove_node(&$node) {
     $pnode = $node->parentNode;
     remove_children($node);
     $pnode->removeChild($node);
 }

function remove_children(&$node) {
       while ($node->firstChild) {
             while ($node->firstChild->firstChild) {
                  remove_children($node->firstChild);

         }

         $node->removeChild($node->firstChild);
     }
 }


function ClearFiles($files) {

  for ($i = 0; $i < count($files); $i++) {
    print('clean file '. $files[$i]."\n<br/>");

    $dom = new DOMDocument();
    @$dom->loadHTMLFile($files[$i]);

    $xpath = new DOMXPath($dom);
    $nodeList = $xpath->query('//a');


    /**
     * @var DOMNodeList $comment
     */
    $comments = $xpath->query("//comment()");

    foreach($comments as $comment) {
      remove_node($comment);
    }

    /**
     * @var DOMElement $node
     */
    $newLink= '';
    foreach ($nodeList as $node) {
      $link = $node->getAttribute('href');
      $linkStr = str_replace('https://www.google.com/url?q=', '', $link);

      $pos = strpos($linkStr, '&usd');
      $pos2 = strpos($linkStr, '%3F');
      $pos3 = strpos($linkStr, 'docs.google.com');

      if ($pos3 > 0) {
        continue;
      }
      if ($pos > 0) {
        $newLink = substr($linkStr, 0, $pos);
      }
      if ($pos2 > 0) {
        $newLink = substr($linkStr, 0, $pos2);
      }
      if ($newLink != '') {
        $node->setAttribute('href', $newLink);
      }
    }
    $dom->saveHTMLFile($files[$i]);
  }
}


ClearFiles(getFiles());

?>


