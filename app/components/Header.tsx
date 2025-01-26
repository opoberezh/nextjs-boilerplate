'use client';

import { AppBar, Toolbar, Box, Tabs, Tab } from '@mui/material';
import { usePathname, useRouter } from 'next/navigation';

const navTabs = [
  { label: 'Home', value: '/' },
  { label: 'About', value: '/about' },
  { label: 'Projects', value: '/projects' },
  
];

function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const normalizePathname = (path: string) => path.replace(/\/+$/, '') || '/';

  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    router.push(newValue);
  };

  const currentTabValue = navTabs.some(tab => tab.value === normalizePathname(pathname))
    ? normalizePathname(pathname)
    : '/';

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'background.paper',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box>
          <Tabs
            value={currentTabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            aria-label="navigation tabs"
            sx={{
              '& .MuiTab-root': { color: '#ffffff' },
              '& .Mui-selected': { color: '#00ffcc' },
            }}
          >
            {navTabs.map(tab => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                aria-controls={`nav-tab-${tab.value}`}
              />
            ))}
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
