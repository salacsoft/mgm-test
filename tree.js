// specify the data
var rowData = [
    { id: 1, filePath: ['Documents'], type: 'folder' },
    { id: 2, filePath: ['Documents', 'note'], type: 'folder' },
    {
      id: 3,
      filePath: ['Documents', 'note', 'notebook.txt'],
      type: 'file',
      dateModified: 'May 21 2017 01:50:00 PM',
      size: 14.7,
    },
    { id: 4, filePath: ['Documents', 'pdf'], type: 'folder' },
    {
      id: 5,
      filePath: ['Documents', 'pdf', 'cookbook.pdf'],
      type: 'file',
      dateModified: 'May 20 2017 01:50:00 PM',
      size: 2.1,
    },
    {
      id: 6,
      filePath: ['Documents', 'pdf', 'cv.pdf'],
      type: 'file',
      dateModified: 'May 20 2016 11:50:00 PM',
      size: 2.4,
    },
    { id: 7, filePath: ['Documents', 'xls'], type: 'folder' },
    {
      id: 8,
      filePath: ['Documents', 'xls', 'sales.xls'],
      type: 'file',
      dateModified: 'Aug 12 2016 10:50:00 AM',
      size: 4.3,
    },
    { id: 9, filePath: ['Documents', 'docs'], type: 'folder' },
    {
      id: 10,
      filePath: ['Documents', 'docs', 'rizal.txt'],
      type: 'file',
      dateModified: 'Jan 17 2016 08:03:00 PM',
      size: 1.1,
    },
    { id: 11, filePath: ['Kanta'], type: 'folder' },
    { id: 12, filePath: ['Kanta', 'mp3'], type: 'folder' },
    {
      id: 13,
      filePath: ['Kanta', 'mp3', 'theme.mp3'],
      type: 'file',
      dateModified: 'Dec 11 2016 08:03:00 PM',
      size: 14.3,
    },
    { id: 14, filePath: ['Misc2'], type: 'folder' },
    {
      id: 15,
      filePath: ['Misc2', 'temp.txt'],
      type: 'file',
      dateModified: 'July 12 2016 10:50:00 PM',
      size: 101,
    },
  ];


  var rowData2 = [
    { id: 1, filePath: ['MyDocuments'], type: 'folder' },
    { id: 2, filePath: ['MyDocuments', 'txt'], type: 'folder' },
    {
      id: 3,
      filePath: ['MyDocuments', 'txt', 'notsssdses.txt'],
      type: 'file',
      dateModified: 'May 21 2017 01:50:00 PM',
      size: 14.7,
    },
    { id: 4, filePath: ['MyDocuments', 'pdf'], type: 'folder' },
    {
      id: 5,
      filePath: ['MyDocuments', 'pdf', 'boosdsdsdk.pdf'],
      type: 'file',
      dateModified: 'May 20 2017 01:50:00 PM',
      size: 2.1,
    },
    {
      id: 6,
      filePath: ['MyDocuments', 'pdf', 'csdsdsv.pdf'],
      type: 'file',
      dateModified: 'May 20 2016 11:50:00 PM',
      size: 2.4,
    },
    { id: 7, filePath: ['MyDocuments', 'xls'], type: 'folder' },
    {
      id: 8,
      filePath: ['MyDocuments', 'xls', 'accountererers.xls'],
      type: 'file',
      dateModified: 'Aug 12 2016 10:50:00 AM',
      size: 4.3,
    },
    { id: 9, filePath: ['MyDocuments', 'stuff'], type: 'folder' },
    {
      id: 10,
      filePath: ['MyDocuments', 'stuff', 'aaasss.txt'],
      type: 'file',
      dateModified: 'Jan 17 2016 08:03:00 PM',
      size: 1.1,
    },
    { id: 11, filePath: ['Music'], type: 'folder' },
    { id: 12, filePath: ['Music', 'mp3'], type: 'folder' },
    {
      id: 13,
      filePath: ['Music', 'mp3', 'theme3.mp3'],
      type: 'file',
      dateModified: 'Sep 11 2016 08:03:00 PM',
      size: 14.3,
    },
    { id: 14, filePath: ['Misc'], type: 'folder' },
    {
      id: 15,
      filePath: ['Misc', 'temp2.txt'],
      type: 'file',
      dateModified: 'Aug 12 2016 10:50:00 PM',
      size: 101,
    },
  ];
  
  var gridOptions = {
    columnDefs: [
      {
        field: 'dateModified',
        cellClassRules: {
          'hover-over': function(params) {
            return params.node === potentialParent;
          },
        },
      },
      {
        field: 'size',
        valueFormatter: function(params) {
          return params.value ? params.value + ' MB' : '';
        },
        cellClassRules: {
          'hover-over': function(params) {
            return params.node === potentialParent;
          },
        },
      },
    ],
    defaultColDef: {
      flex: 1,
      resizable: true,
    },
    components: {
      fileCellRenderer: getFileCellRenderer(),
    },
    rowData: rowData,
    treeData: true,
    animateRows: true,
    groupDefaultExpanded: -1,
    getDataPath: function(data) {
      return data.filePath;
    },
    getRowNodeId: function(data) {
      return data.id;
    },
    rowDragManaged: true,
    autoGroupColumnDef: {
      rowDrag: true,
      headerName: 'Files',
      minWidth: 300,
      cellRendererParams: {
        suppressCount: true,
        innerRenderer: 'fileCellRenderer',
      },
      cellClassRules: {
        'hover-over': function(params) {
          return params.node === potentialParent;
        },
      },
    },
    onGridReady: function(params) {
        addGridDropZone2(params);
    },
    onRowDragEnd: onRowDragEnd,
    onRowDragMove: onRowDragMove,
    onRowDragLeave: onRowDragLeave,
  };

  var gridOptions2 = {
    columnDefs: [
      {
        field: 'dateModified',
        cellClassRules: {
          'hover-over': function(params) {
            return params.node === potentialParent;
          },
        },
      },
      {
        field: 'size',
        valueFormatter: function(params) {
          return params.value ? params.value + ' MB' : '';
        },
        cellClassRules: {
          'hover-over': function(params) {
            return params.node === potentialParent;
          },
        },
      },
    ],
    defaultColDef: {
      flex: 1,
      resizable: true,
    },
    components: {
      fileCellRenderer: getFileCellRenderer2(),
    },
    rowData: rowData2,
    treeData: true,
    animateRows: true,
    groupDefaultExpanded: -1,
    getDataPath: function(data) {
      return data.filePath;
    },
    getRowNodeId: function(data) {
      return data.id;
    },
    rowDragManaged: true,
    autoGroupColumnDef: {
      rowDrag: true,
      headerName: 'Files',
      minWidth: 300,
      cellRendererParams: {
        suppressCount: true,
        innerRenderer: 'fileCellRenderer',
      },
      cellClassRules: {
        'hover-over': function(params) {
          return params.node === potentialParent;
        },
      },
    },
    onGridReady: function(params) {
        addGridDropZone(params);
    },
    onRowDragEnd: onRowDragEnd2,
    onRowDragMove: onRowDragMove2,
    onRowDragLeave: onRowDragLeave2,
  };

  function addGridDropZone(params) {
    var gridApi = gridOptions.api;
    var dropZone = gridApi.getRowDropZoneParams();

    params.api.addRowDropZone(dropZone);
  }


  function addGridDropZone2(params) {
    var gridApi = gridOptions2.api;
    var dropZone = gridApi.getRowDropZoneParams();

    params.api.addRowDropZone(dropZone);
  }
  
  var potentialParent = null;
  
  function onRowDragMove(event) {
    setPotentialParentForNode(event.api, event.overNode);
  }
  
  function onRowDragLeave(event) {
    // clear node to highlight
    setPotentialParentForNode(event.api, null);
  }
  
  function onRowDragEnd(event) {
    if (!potentialParent) {
      return;
    }
    alert("imhere");
    console.log(event.node.data);
  
    var movingData = event.node.data;
  
    // take new parent path from parent, if data is missing, means it's the root node,
    // which has no data.
    var newParentPath = potentialParent.data ? potentialParent.data.filePath : [];
    var needToChangeParent = !arePathsEqual(newParentPath, movingData.filePath);
  
    // check we are not moving a folder into a child folder
    var invalidMode = isSelectionParentOfTarget(event.node, potentialParent);
    if (invalidMode) {
      console.log('invalid move');
    }
  
    if (needToChangeParent && !invalidMode) {
      var updatedRows = [];
      moveToPath(newParentPath, event.node, updatedRows);
  
      gridOptions.api.applyTransaction({
        add: updatedRows,
      });
      gridOptions2.api.applyTransaction({
        remove: updatedRows,
      });
      gridOptions2.api.clearFocusedCell();
    }
  
    // clear node to highlight
    setPotentialParentForNode(event.api, null);
  }
  
  function moveToPath(newParentPath, node, allUpdatedNodes) {
    // last part of the file path is the file name
    var oldPath = node.data.filePath;
    var fileName = oldPath[oldPath.length - 1];
    var newChildPath = newParentPath.slice();
    newChildPath.push(fileName);
  
    node.data.filePath = newChildPath;
  
    allUpdatedNodes.push(node.data);
  
    if (node.childrenAfterGroup) {
      node.childrenAfterGroup.forEach(function(childNode) {
        moveToPath(newChildPath, childNode, allUpdatedNodes);
      });
    }
  }


  function onRowDragMove2(event) {
    setPotentialParentForNode(event.api, event.overNode);
  }
  
  function onRowDragLeave2(event) {
    // clear node to highlight
    setPotentialParentForNode(event.api, null);
  }
  
  function onRowDragEnd2(event) {
    if (!potentialParent) {
      return;
    }
  
    var movingData = event.node.data;
  
    // take new parent path from parent, if data is missing, means it's the root node,
    // which has no data.
    var newParentPath = potentialParent.data ? potentialParent.data.filePath : [];
    var needToChangeParent = !arePathsEqual(newParentPath, movingData.filePath);
  
    // check we are not moving a folder into a child folder
    var invalidMode = isSelectionParentOfTarget(event.node, potentialParent);
    if (invalidMode) {
      console.log('invalid move');
    }
  
    if (needToChangeParent && !invalidMode) {
      var updatedRows = [];
      moveToPath(newParentPath, event.node, updatedRows);
      console.log("eventnode", event.node.data);
      console.log("updaterw", updatedRows);
  
      gridOptions2.api.applyTransaction({
        add: updatedRows,
      });
      gridOptions.api.applyTransaction({
        remove: updatedRows,
      });
      gridOptions.api.clearFocusedCell();
    }
  
    // clear node to highlight
    setPotentialParentForNode(event.api, null);
  }
  
  function moveToPath(newParentPath, node, allUpdatedNodes) {
    // last part of the file path is the file name
    var oldPath = node.data.filePath;
    var fileName = oldPath[oldPath.length - 1];
    var newChildPath = newParentPath.slice();
    newChildPath.push(fileName);
  
    node.data.filePath = newChildPath;
  
    allUpdatedNodes.push(node.data);
  
    if (node.childrenAfterGroup) {
      node.childrenAfterGroup.forEach(function(childNode) {
        moveToPath(newChildPath, childNode, allUpdatedNodes);
      });
    }
  }
  
  function isSelectionParentOfTarget(selectedNode, targetNode) {
    var children = selectedNode.childrenAfterGroup;
    for (var i = 0; i < children.length; i++) {
      if (targetNode && children[i].key === targetNode.key) return true;
      isSelectionParentOfTarget(children[i], targetNode);
    }
    return false;
  }
  
  function arePathsEqual(path1, path2) {
    if (path1.length !== path2.length) {
      return false;
    }
  
    var equal = true;
    path1.forEach(function(item, index) {
      if (path2[index] !== item) {
        equal = false;
      }
    });
  
    return equal;
  }
  
  function setPotentialParentForNode(api, overNode) {
    var newPotentialParent;
    if (overNode) {
      newPotentialParent =
        overNode.data.type === 'folder'
          ? // if over a folder, we take the immediate row
            overNode
          : // if over a file, we take the parent row (which will be a folder)
            overNode.parent;
    } else {
      newPotentialParent = null;
    }
  
    var alreadySelected = potentialParent === newPotentialParent;
    if (alreadySelected) {
      return;
    }
  
    // we refresh the previous selection (if it exists) to clear
    // the highlighted and then the new selection.
    var rowsToRefresh = [];
    if (potentialParent) {
      rowsToRefresh.push(potentialParent);
    }
    if (newPotentialParent) {
      rowsToRefresh.push(newPotentialParent);
    }
  
    potentialParent = newPotentialParent;
  
    refreshRows(api, rowsToRefresh);
  }

  function setPotentialParentForNode2(api, overNode) {
    var newPotentialParent;
    if (overNode) {
      newPotentialParent =
        overNode.data.type === 'folder'
          ? // if over a folder, we take the immediate row
            overNode
          : // if over a file, we take the parent row (which will be a folder)
            overNode.parent;
    } else {
      newPotentialParent = null;
    }
  
    var alreadySelected = potentialParent === newPotentialParent;
    if (alreadySelected) {
      return;
    }
  
    // we refresh the previous selection (if it exists) to clear
    // the highlighted and then the new selection.
    var rowsToRefresh = [];
    if (potentialParent) {
      rowsToRefresh.push(potentialParent);
    }
    if (newPotentialParent) {
      rowsToRefresh.push(newPotentialParent);
    }
  
    potentialParent = newPotentialParent;
  
    refreshRows2(api, rowsToRefresh);
  }
  
  
  function refreshRows(api, rowsToRefresh) {
    var params = {
      // refresh these rows only.
      rowNodes: rowsToRefresh,
      // because the grid does change detection, the refresh
      // will not happen because the underlying value has not
      // changed. to get around this, we force the refresh,
      // which skips change detection.
      force: true,
    };
    api.refreshCells(params);
  }

  function refreshRows2(api, rowsToRefresh) {
    var params = {
      // refresh these rows only.
      rowNodes: rowsToRefresh,
      // because the grid does change detection, the refresh
      // will not happen because the underlying value has not
      // changed. to get around this, we force the refresh,
      // which skips change detection.
      force: true,
    };
    api.refreshCells(params);
  }
  
  function getFileCellRenderer() {
    function FileCellRenderer() {}
  
    FileCellRenderer.prototype.init = function(params) {
      var tempDiv = document.createElement('div');
      var value = params.value;
      var icon = getFileIcon(params.value);
      tempDiv.innerHTML = icon
        ? '<i class="' +
          icon +
          '"/>' +
          '<span class="filename">' +
          value +
          '</span>'
        : value;
      this.eGui = tempDiv.firstChild;
    };
    FileCellRenderer.prototype.getGui = function() {
      return this.eGui;
    };
  
    return FileCellRenderer;
  }

  function getFileCellRenderer2() {
    function FileCellRenderer() {}
  
    FileCellRenderer.prototype.init = function(params) {
      var tempDiv = document.createElement('div');
      var value = params.value;
      var icon = getFileIcon(params.value);
      tempDiv.innerHTML = icon
        ? '<i class="' +
          icon +
          '"/>' +
          '<span class="filename">' +
          value +
          '</span>'
        : value;
      this.eGui = tempDiv.firstChild;
    };
    FileCellRenderer.prototype.getGui = function() {
      return this.eGui;
    };
  
    return FileCellRenderer;
  }
  
  if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(search, this_len) {
      if (this_len === undefined || this_len > this.length) {
        this_len = this.length;
      }
      return this.substring(this_len - search.length, this_len) === search;
    };
  }
  
  function getFileIcon(filename) {
    return filename.endsWith('.mp3') || filename.endsWith('.wav')
      ? 'far fa-file-audio'
      : filename.endsWith('.xls')
      ? 'far fa-file-excel'
      : filename.endsWith('.txt')
      ? 'far fa-file'
      : filename.endsWith('.pdf')
      ? 'far fa-file-pdf'
      : 'far fa-folder';
  }
  
  // wait for the document to be loaded, otherwise
  // ag-Grid will not find the div in the document.
  document.addEventListener('DOMContentLoaded', function() {
    // lookup the container we want the Grid to use
    var eGridDiv = document.querySelector('#myGrid');
    var eGridDiv2 = document.querySelector('#myGrid2');
  
    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions);
    new agGrid.Grid(eGridDiv2, gridOptions2);
  });
  