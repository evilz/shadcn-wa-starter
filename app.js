function dashboardApp() {
  const source = window.MOCK_DASHBOARD_DATA;
  const base =
    typeof structuredClone === 'function'
      ? structuredClone(source)
      : JSON.parse(JSON.stringify(source));

  return {
    ...base,
    sidebarOpen: window.innerWidth >= 1024,
    activeNav: 'Tableau de bord',

    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },

    setNav(label) {
      this.activeNav = label;
    },

    randomizeRevenue() {
      this.revenue = this.revenue.map((point) => ({
        ...point,
        value: Math.max(50, Math.min(500, point.value + Math.floor(Math.random() * 61) - 30))
      }));
      const total = this.revenue.reduce((acc, p) => acc + p.value, 0);
      this.stats[0].value = `€${(total * 100).toLocaleString('fr-FR', { minimumFractionDigits: 2 })}`;
    },

    barHeight(value) {
      const max = Math.max(...this.revenue.map((p) => p.value), 1);
      return Math.max(4, Math.round((value / max) * 200));
    },

    avatarColor(initials) {
      const colors = [
        '#7c3aed', '#db2777', '#0284c7', '#059669', '#d97706', '#dc2626'
      ];
      const idx = (initials.charCodeAt(0) + initials.charCodeAt(1)) % colors.length;
      return colors[idx];
    }
  };
}
