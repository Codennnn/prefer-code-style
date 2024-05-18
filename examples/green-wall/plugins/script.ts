const isProfile = new RegExp(/^https:\/\/github\.com\/.+\/?$/).test(window.location.href)

if (isProfile) {
  const ORIGIN = 'https://green-wall.leoku.dev'

  const enum ContributionLevel {
    Null = 'Null',
    NONE = 'NONE',
    FIRST_QUARTILE = 'FIRST_QUARTILE',
    SECOND_QUARTILE = 'SECOND_QUARTILE',
    THIRD_QUARTILE = 'THIRD_QUARTILE',
    FOURTH_QUARTILE = 'FOURTH_QUARTILE',
  }

  type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6

  interface ContributionDay {
    count: number
    date: string
    level: `${ContributionLevel}`
    weekday?: Weekday
  }

  interface ContributionBasic {
    name?: string
    login: string
    avatarUrl: string
    contributionYears: number[]
    contributionCalendars: {
      total: number
      year: number
      weeks: {
        days: ContributionDay[]
      }[]
    }[]
  }

  interface Data {
    data: ContributionBasic
  }

  interface Calendar {
    total: number
    year: number
    rows: ContributionDay[][]
  }

  interface ProducedData {
    contributionCalendars: Calendar[]
  }

  const produceData = ({ data }: Data): ProducedData => {
    const contributionCalendars = data.contributionCalendars.map<Calendar>((cur) => {
      const rows: Calendar['rows'] = [[], [], [], [], [], [], []]
      const nullDay: ContributionDay = { count: 0, date: '', level: 'Null' }

      cur.weeks.forEach(({ days }) => {
        if (days.length !== 7) {
          const newDays = [...days]

          for (let i = 0; i <= 6; i++) {
            const theDay = newDays.at(i)

            const weekday = i as Weekday

            if (theDay && typeof theDay.weekday === 'number') {
              if (theDay.weekday === weekday) {
                rows[theDay.weekday].push(theDay)
              } else {
                newDays.splice(i, 0, nullDay)
                rows[i].push(nullDay)
              }
            } else {
              rows[i].push(nullDay)
            }
          }
        } else {
          days.forEach((day) => {
            if (typeof day.weekday === 'number') {
              rows[day.weekday].push(day)
            }
          })
        }
      })

      const calendar = {
        total: cur.total,
        year: cur.year,
        rows,
      }

      return calendar
    })

    return {
      contributionCalendars,
    }
  }

  const createGraph = (
    params: Calendar
  ): {
    graphItem: HTMLDivElement
  } => {
    const { year, total, rows } = params

    const table = document.createElement('table')
    table.classList.add('ContributionCalendar-grid')
    table.style.borderSpacing = '3px'
    table.style.overflow = 'hidden'
    table.style.position = 'relative'

    const tbody = document.createElement('tbody')
    const tr = document.createElement('tr')
    tr.style.height = '10px'

    rows.forEach((row) => {
      const clonedTr = tr.cloneNode()

      let htmlStr = ''

      row.forEach((col, idx) => {
        let td = '<td></td>'

        if (col.level !== ContributionLevel.Null) {
          const level =
            col.level === ContributionLevel.NONE
              ? 0
              : col.level === ContributionLevel.FIRST_QUARTILE
                ? 1
                : col.level === ContributionLevel.SECOND_QUARTILE
                  ? 2
                  : col.level === ContributionLevel.THIRD_QUARTILE
                    ? 3
                    : 4

          td = `
          <td
            title="${col.count === 0 ? 'No' : col.count} contributions in ${col.date}"
            tabindex="-1"
            data-ix="${idx}"
            style="width: 10px"
            data-level="${level}"
            class="ContributionCalendar-day"
            data-date="${col.level}"
            aria-selected="false"
            role="gridcell"
          ></td>
          `
        }

        htmlStr += td
      })

      if (clonedTr instanceof HTMLTableRowElement) {
        clonedTr.innerHTML = htmlStr
        tbody.append(clonedTr)
      }
    })

    table.appendChild(tbody)

    const graphItem = document.createElement('div')
    const countText = document.createElement('div')
    countText.style.marginBottom = '5px'
    countText.textContent = `${total} contributions in ${year}`
    graphItem.append(countText, table)

    return { graphItem }
  }

  const createDialog = (params: {
    username: string
  }): {
    dialog: HTMLDialogElement
    dialogContent: HTMLDivElement
  } => {
    const { username } = params

    const dialog = document.createElement('dialog')
    dialog.id = 'green-wall-dialog'
    dialog.classList.add(
      'Overlay',
      'Overlay-whenNarrow',
      'Overlay--size-medium-portrait',
      'Overlay--motion-scaleFadeOverlay',
      'Overlay-whenNarrow',
      'Overlay--size-medium-portrait',
      'Overlay--motion-scaleFade'
    )
    dialog.style.minWidth = '720px'
    dialog.style.maxHeight = 'calc(100vh - 50px)'

    dialog.addEventListener('close', () => {
      document.body.classList.remove('has-modal')
    })

    dialog.addEventListener('click', () => {
      dialog.close()
    })

    // ---

    const wrap = document.createElement('div')
    wrap.style.display = 'flex'
    wrap.style.flexDirection = 'column'
    wrap.style.overflow = 'hidden'
    wrap.addEventListener('click', (ev) => {
      ev.stopPropagation()
    })

    // ---

    const dialogHeader = document.createElement('div')
    dialogHeader.classList.add('Overlay-header')

    const contentWrap = document.createElement('div')
    contentWrap.classList.add('Overlay-headerContentWrap')

    const titleWrap = document.createElement('div')
    titleWrap.classList.add('Overlay-titleWrap')

    const title = document.createElement('h1')
    title.classList.add('Overlay-title')
    title.textContent = `${username}'s GreenWall`

    const actionWrap = document.createElement('div')
    actionWrap.classList.add('Overlay-actionWrap')

    const actionButton = document.createElement('button')
    actionButton.classList.add('close-button', 'Overlay-closeButton')
    actionButton.setAttribute('type', 'button')
    actionButton.innerHTML = `
    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
      <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
    </svg>
    `
    actionButton.addEventListener('click', (ev) => {
      ev.stopPropagation()
      dialog.close()
    })

    // ---

    const dialogBody = document.createElement('div')
    dialogBody.classList.add('Overlay-body')
    dialogBody.style.overflowY = 'auto'

    const dialogContent = document.createElement('div')
    dialogContent.style.display = 'flex'
    dialogContent.style.flexDirection = 'column'
    dialogContent.style.rowGap = '10px'
    dialogContent.style.alignItems = 'center'
    dialogContent.style.padding = 'var(--stack-padding-normal, 1rem)'

    // ---

    const dialogFooter = document.createElement('div')
    dialogFooter.classList.add(
      'Overlay-footer',
      'Overlay-footer--alignEnd',
      'Overlay-footer--divided'
    )
    const openExtrnalBtn = document.createElement('button')
    const btnContent = document.createElement('span')
    btnContent.classList.add('Button-label')
    btnContent.textContent = 'Open in Green Wall'
    openExtrnalBtn.classList.add('Button', 'Button--primary', 'Button--medium')
    openExtrnalBtn.addEventListener('click', () => {
      window.open(`${ORIGIN}/user/${username}`, '_blank')
    })

    titleWrap.append(title)
    actionWrap.append(actionButton)
    contentWrap.append(titleWrap, actionWrap)
    openExtrnalBtn.append(btnContent)
    dialogHeader.append(contentWrap)
    dialogBody.append(dialogContent)
    dialogFooter.append(openExtrnalBtn)

    wrap.append(dialogHeader, dialogBody, dialogFooter)
    dialog.append(wrap)

    document.body.append(dialog)

    return { dialog, dialogContent }
  }

  const profileArea = document.querySelector('.Layout-sidebar .h-card .js-profile-editable-replace')
  const refNode = document.querySelector('.js-profile-editable-replace > .d-flex.flex-column')
    ?.nextSibling?.nextSibling

  if (profileArea instanceof HTMLElement && refNode instanceof HTMLElement) {
    const username = document
      .querySelector('meta[property="profile:username"]')
      ?.getAttribute('content')

    if (username) {
      const block = document.createElement('div')
      block.classList.add(
        'border-top',
        'color-border-muted',
        'pt-3',
        'mt-3',
        'clearfix',
        'hide-sm',
        'hide-md'
      )

      const title = document.createElement('h2')
      title.classList.add('h4', 'mb-2')
      title.textContent = 'Green Wall'

      const openBtn = document.createElement('button')
      openBtn.classList.add('btn')
      openBtn.textContent = ' ⬜🟩 View All Green'

      block.appendChild(title)
      block.appendChild(openBtn)

      profileArea.insertBefore(block, refNode)

      const { dialog, dialogContent } = createDialog({ username })

      let hasLoaded = false

      const handleLoadError = () => {
        dialogContent.innerHTML = ''

        const errorBlock = document.createElement('div')
        errorBlock.style.display = 'flex'
        errorBlock.style.flexDirection = 'column'
        errorBlock.style.alignItems = 'center'

        const tip = document.createElement('p')
        tip.textContent = 'The process of obtaining data has an exception.'

        const retryBtn = document.createElement('button')
        retryBtn.classList.add('btn')
        retryBtn.textContent = 'Retry'
        retryBtn.addEventListener('click', () => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          handleLoadData()
        })

        errorBlock.append(tip, retryBtn)

        dialogContent.append(errorBlock)
      }

      const handleLoadData = () => {
        const loading = `
        <svg aria-label="Loading" style="box-sizing: content-box; color: var(--color-icon-primary);" width="32" height="32" viewBox="0 0 16 16" fill="none" data-view-component="true" class="anim-rotate">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25" stroke-width="2" vector-effect="non-scaling-stroke" fill="none"></circle>
          <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
        </svg>
        `
        dialogContent.innerHTML = loading

        GM.xmlHttpRequest({
          method: 'GET',
          url: `${ORIGIN}/api/contribution/${username}`,
          onload: (response) => {
            try {
              dialogContent.innerHTML = ''

              const data: Data = JSON.parse(response.responseText)
              const xData = produceData(data)

              xData.contributionCalendars.forEach((calendar) => {
                const { graphItem } = createGraph(calendar)
                dialogContent.append(graphItem)
              })

              hasLoaded = true
            } catch {
              handleLoadError()
            }
          },
          onerror: (err) => {
            console.error('[Green Wall]: ', err)
            handleLoadError()
          },
        })
      }

      const handleDialogOpen = () => {
        dialog.showModal()
        document.body.classList.add('has-modal')

        if (!hasLoaded) {
          handleLoadData()
        }
      }

      openBtn.addEventListener('click', () => {
        handleDialogOpen()
      })
    }
  } else {
    console.warn('[Green Wall]: Target node not found.')
  }
}
