import * as React from 'react'
import { Toolbar  } from '@devoinc/genesys-ui';

export const App = () => {
  return (
  <React.Fragment key=".0">
    <Toolbar.ToolbarGroup>
      <Toolbar.ToolbarItem>
        Item One - G1
      </Toolbar.ToolbarItem>
      <Toolbar.ToolbarItem>
        Item Two - G1
      </Toolbar.ToolbarItem>
    </Toolbar.ToolbarGroup>
    <Toolbar.ToolbarGroup>
      <Toolbar.ToolbarSeparator />
    </Toolbar.ToolbarGroup>
    <Toolbar.ToolbarGroup>
      <Toolbar.ToolbarItem>
        Item One - G2
      </Toolbar.ToolbarItem>
    </Toolbar.ToolbarGroup>
    <Toolbar.ToolbarGroup>
      <Toolbar.ToolbarItem>
        Item One - G3
      </Toolbar.ToolbarItem>
    </Toolbar.ToolbarGroup>
  </React.Fragment>
  );
};
