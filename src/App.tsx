import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiMasonry } from './components/MuiMasonry';
// import { MuiTimeline } from './components/MuiTimeline';
// import { MuiTabs } from './components/MuiTabs';
// import { MuiDateRangePicker } from './components/MuiDateRangePicker';
// import { MuiPicker } from './components/MuiPicker';
// import { MuiLoadingButton } from './components/MuiLoadingButton';
// import { MuiSkeleton } from './components/MuiSkeleton';
// import { MuiProgress } from './components/MuiProgress';
// import { MuiDialog } from './components/MuiDialog';
// import { MuiSnackbar } from './components/MuiSnackbar';
// import { MuiAlert } from './components/MuiAlert';
// import { MuiTable } from './components/MuiTable';
// import { MuiTooltip } from './components/MuiTooltip';
// import { MuiChip } from './components/MuiChip';
// import { MuiList } from './components/MuiList';
// import { MuiBadge } from './components/MuiBadge';
// import { MuiAvatar } from './components/MuiAvatar';
// import { MuiBottomNavigation } from './components/MuiBottomNavigation';
// import { MuiSpeedDial } from './components/MuiSpeedDial';
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
// import { MuiDrawer } from './components/MuiDrawer';
// import { MuiLink } from './components/MuiLink';
// import { MuiNavbar } from './components/MuiNavbar';
// import { MuiImageList } from './components/MuiImageList';
// import { MuiAccordion } from './components/MuiAccordion';
// import { MuiCard } from './components/MuiCard';
// import { MuiLayout } from './components/MuiLayout';
// import { MuiAutocomplete } from './components/MuiAutocomplete';
// import { MuiRating } from './components/MuiRating';
// import { MuiSwitch } from './components/MuiSwitch';
// import { MuiCheckbox } from './components/MuiCheckbox';
// import { MuiRadioButton } from './components/MuiRadioButton';
// import { MuiSelect } from './components/MuiSelect';
// import { MuiTextField } from './components/MuiTextField';
// import { MuiButton } from './components/MuiButton';
// import MuiTypography from './components/MuiTypography';

function App() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="App">
                {/* <MuiTypography /> */}
                {/* <MuiButton /> */}
                {/* <MuiTextField /> */}
                {/* <MuiSelect /> */}
                {/* <MuiRadioButton /> */}
                {/* <MuiCheckbox /> */}
                {/* <MuiSwitch /> */}
                {/* <MuiRating /> */}
                {/* <MuiAutocomplete /> */}
                {/* <MuiLayout /> */}
                {/* <MuiCard /> */}
                {/* <MuiAccordion /> */}
                {/* <MuiImageList /> */}
                {/* <MuiNavbar /> */}
                {/* <MuiBreadcrumbs /> */}
                {/* <MuiDrawer /> */}
                {/* <MuiLink /> */}
                {/* <MuiSpeedDial /> */}
                {/* <MuiBottomNavigation /> */}
                {/* <MuiAvatar /> */}
                {/* <MuiBadge /> */}
                {/* <MuiList /> */}
                {/* <MuiChip /> */}
                {/* <MuiTooltip /> */}
                {/* <MuiTable /> */}
                {/* <MuiAlert /> */}
                {/* <MuiSnackbar /> */}
                {/* <MuiDialog /> */}
                {/* <MuiProgress /> */}
                {/* <MuiSkeleton /> */}
                {/* <MuiLoadingButton /> */}
                {/* <MuiPicker /> */}
                {/* <MuiDateRangePicker /> */}
                {/* <MuiTabs /> */}
                {/* <MuiTimeline /> */}
                <MuiMasonry />
            </div>
        </LocalizationProvider>
    );
}

export default App;
