/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { useEffect, useState } from "react"

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getIds(item.items))
    }
    return acc
  }, [])
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`)
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )
    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })
    return () => {
      itemIds.forEach(id => {
        try {
          observer.unobserve(document.getElementById(id))
        } catch {
          observer.disconnect()
        }
      })
    }
  }, [itemIds])

  return activeId
}

function renderItems(items, activeId) {
  return (
    <ul style={{ paddingInlineStart: "0" }}>
      {items.map(item => {
        return (
          <li key={item.url} style={{ listStyle: "none" }}>
            <a
              href={item.url}
              sx={{
                color: activeId === item.url.slice(1) ? "primary" : "text",
                borderLeftColor:
                  activeId === item.url.slice(1) ? "primary" : "text",
                borderLeftWidth: "2px",
                borderLeftStyle: "solid",
                pl: ".4rem",
                "&:hover": { borderLeftColor: "primary" },
              }}
            >
              {item.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function TableOfContents(props) {
  const idList = getIds(props.items)
  const activeId = useActiveId(idList)
  return (
    <Box sx={{ my: 3, pl: 3 }}>
      <strong>Table of Contents</strong>
      {renderItems(props.items, activeId)}
    </Box>
  )
}

export default TableOfContents
