"use client"
import { initGA, logPageView } from '@/utils/analytics';
import { useEffect } from 'react';
function Analytics() {
    useEffect(() => {
        initGA();
        logPageView();
    }, []);
}

export default Analytics;