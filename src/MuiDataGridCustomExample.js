import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarExport, GridToolbarFilterButton, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <p>People</p>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector
        slotProps={{ tooltip: { title: 'Change density' } }}
      />
      <Box sx={{ flexGrow: 1 }} />
      <GridToolbarQuickFilter
        placeholder='Search Results...'
        quickFilterParser={(searchInput) =>
          searchInput.split(',').map((value) => value.trim())
        }
        quickFilterFormatter={(quickFilterValues) => quickFilterValues.join(', ')}
        debounceMs={200} // time before applying the new quick filter value
      />
      <GridToolbarExport
        slotProps={{
          tooltip: { title: 'Export data' },
          button: { variant: 'outlined' },
        }}
      />
    </GridToolbarContainer>
  );
}

const MuiCustomDataGrid = ({ columns, rows }) => {
  const [expanded, setExpanded] = React.useState(true);
  const [resultType, setResultType] = React.useState();

  const handleChange = (event) => {
    setResultType(event.target.value);
  };

  const handleExpandResultControls = () => {
    setExpanded(!expanded);
  };

  // Custom result control filters
  const [isOverFortyFilter, setIsOverFortyFilter] = React.useState(false);
  const [nameContainsEFilter, setNameContainsEFilter] = React.useState(false);

  const toggleIsOverFortyFilter = (event) => {
    setIsOverFortyFilter(event.target.checked);
  };
  const toggleNameContainsEFilter = (event) => {
    setNameContainsEFilter(event.target.checked);
  };

  const rowData = React.useMemo(() => {
    let data = rows;
    if (isOverFortyFilter) {
      data = data.filter(row => row.age > 40)
    }
    if (nameContainsEFilter) {
      data = data.filter(row => row?.firstName?.toLowerCase().includes('e'))
    }
    return data;
  }, [isOverFortyFilter, nameContainsEFilter, rows]);

  return (
    <>
      <Accordion sx={{ width: '300px' }} expanded={expanded} onChange={handleExpandResultControls}>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
        >
          <Typography>Result Controls</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={resultType}
              onChange={handleChange}
            >
              <FormControlLabel value="things" control={<Radio />} label={'Things (0)'} />
              <FormControlLabel value="people" control={<Radio />} label={`People (${rows.length})`} />
              {resultType === 'people' && (
                <FormControl sx={{ marginLeft: '25px' }}>
                  <FormControlLabel control={<Checkbox size='small' checked={isOverFortyFilter} onChange={toggleIsOverFortyFilter} />} label="Is Over Forty" />
                  <FormControlLabel control={<Checkbox size='small' checked={nameContainsEFilter} onChange={toggleNameContainsEFilter} />} label="Name Contains an E" />
                </FormControl>

              )}
              <FormControlLabel value="places" control={<Radio />} label="Places (0)" />

            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      {resultType === 'people' && (
        <Box sx={{ width: 1 }}>
          <DataGrid
            columns={columns}
            rows={rowData}
            slots={{ toolbar: CustomToolbar }}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            disableRowSelectionOnClick
            disableColumnMenu
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10, 15, 25]}
          />
        </Box>
      )}

    </>

  );
}

export default MuiCustomDataGrid;