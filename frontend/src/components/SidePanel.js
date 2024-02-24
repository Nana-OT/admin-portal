import React from 'react'

export default function SidePanel() {
  return (
    <div>
        <div class="container-fluid">
            <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-5 text-light min-vh-100">
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li>
                            <a href="#" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline text-light">Overview</span></a>
                        </li>
                        <li>
                            <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                <i class="fs-4 bi-grid"></i> <span class=" text-light ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        </li>
                    </ul>
                    <hr/>
                </div>
            </div>
        </div>
        </div>
        </div>
  )
}
