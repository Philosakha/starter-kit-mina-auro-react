import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 3000); // 3000 milliseconds (3 seconds)

      return () => {
        clearTimeout(timer);
      };
    }
  }, [open]);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity={injectProvider ? 'info' : 'error'}
        >
          {injectProvider ? 'Auro does exist' : 'Auro does not exist!'}
        </Alert>
      </Collapse>
    </Box>
  );
}

export default MyComponent;
