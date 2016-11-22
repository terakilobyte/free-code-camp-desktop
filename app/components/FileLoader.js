/**
 * Created by nathanleniz on 11/21/16.
 */
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const dialog = require('electron').remote.dialog;


class FileLoader extends Component {

  constructor(props) {
    super(props);
    this.fileManager = this.fileManager.bind(this);
  }

  fileManager() {
    dialog.showOpenDialog({
      title: 'Open file or folder',
      filters: [{ name: 'JSON', extensions: ['json'] }],
      properties: ['openFile', 'openDirectory']
    });
  }

  render() {
    return (
      <div>
        <IconButton onClick={this.fileManager}>
          <FontIcon className="fa fa-file-code-o" />
        </IconButton>
      </div>
    );
  }
}

export default FileLoader;
