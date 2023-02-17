import React from 'react';
import { ListItem, OrderedList } from "@chakra-ui/react";


export const Instructions: React.FC = () => {
  return (
      <OrderedList>
          <ListItem>
              In your 'Party Hunt' analyser select 'Copy to Clipboard'
          </ListItem>
          <ListItem>
              Paste the values into the input field and click 'Submit'
          </ListItem>
      </OrderedList>
  );
};
