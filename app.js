function dashboardApp() {
  const base = structuredClone(window.MOCK_DASHBOARD_DATA);

  return {
    ...base,
    search: '',
    filteredTasks: base.tasks,
    showTrend: true,

    filterTasks() {
      const term = this.search.toLowerCase().trim();
      this.filteredTasks = this.tasks.filter((task) =>
        task.title.toLowerCase().includes(term) || task.owner.toLowerCase().includes(term)
      );
    },

    randomizeRevenue() {
      this.revenue = this.revenue.map((point) => ({
        ...point,
        value: Math.max(16, Math.min(56, point.value + Math.floor(Math.random() * 11) - 5))
      }));

      const avg = this.revenue.reduce((acc, current) => acc + current.value, 0) / this.revenue.length;
      this.stats[0].value = `€${Math.round(avg * 1200).toLocaleString('fr-FR')}`;
    }
  };
}
