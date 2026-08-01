export function filterByCategory(items, category) {
  if (!category || category === 'all') return items
  return items.filter(item => item.category === category)
}

export function filterByPrice(items, min, max) {
  return items.filter(item => item.price >= min && item.price <= max)
}

export function searchItems(items, query) {
  if (!query) return items
  const q = query.toLowerCase()
  return items.filter(item => item.name.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q))
}