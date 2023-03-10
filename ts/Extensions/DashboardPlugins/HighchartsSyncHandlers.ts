/* *
 *
 *  (c) 2009-2023 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *
 * */

/* eslint-disable require-jsdoc, max-len */

'use strict';

/* *
 *
 *  Imports
 *
 * */

import type Chart from '../../Core/Chart/Chart';
import type Point from '../../Core/Series/Point';
import type SharedState from '../../Dashboards/Components/SharedComponentState';
import type Sync from '../../Dashboards/Components/Sync/Sync';

import ComponentTypes from '../../Dashboards/Components/ComponentType';
import ComponentGroup from '../../Dashboards/Components/ComponentGroup.js';
import HighchartsComponent from './HighchartsComponent.js';
import U from '../../Core/Utilities.js';
import Axis from '../../Core/Axis/Axis';
const { addEvent } = U;


/* *
 *
 *  Declarations
 *
 * */

declare global {
    interface Window {
        HighchartsComponent?: typeof HighchartsComponent;
    }
}


/**
 *
 */
function getAxisMinMaxMap(chart: Chart): Array<{
    coll: string;
    extremes: { min: number | undefined; max: number | undefined };
}> {
    return chart.axes
        .filter((axis): boolean => (chart.options.chart.zoomType || '')
            .indexOf(axis.coll.slice(0, 1)) > -1 // A bit silly
        )
        .map((axis): { coll: string; extremes: { min: number | undefined; max: number | undefined } } => {
            const { min, max, coll } = axis;
            return {
                coll,
                extremes: {
                    min: typeof min === 'number' ? min : void 0,
                    max: typeof max === 'number' ? max : void 0
                }
            };
        }
        );
}

/**
 * Finds a matching point in the chart
 * @param {Chart} chart
 * The chart
 * @param {Point} hoverPoint
 * The point-like to look for
 *
 * @return {Point | undefined}
 * A point if found
 */
function findMatchingPoint(
    chart: Chart,
    hoverPoint: SharedState.PresentationHoverPointType
): Point | undefined {
    const { x, y, series } = hoverPoint;

    for (let i = 0; i < chart.series.length; i++) {
        if (series && chart.series[i].options.id === series.options.id) {
            const { points } = chart.series[i];
            for (let j = 0; j < points.length; j++) {
                const point = points[j];

                if (point.visible && point.series.visible && point.x === x) {
                    return point;
                }
            }
        }
    }
}

const configs: {
    handlers: Record<string, Sync.HandlerConfig>;
    emitters: Record<string, Sync.EmitterConfig>;
} = {
    emitters: {
        tooltipEmitter: [
            'tooltipEmitter',
            function (this: ComponentTypes): Function | void {
                if (this instanceof (HighchartsComponent || window.HighchartsComponent)) {
                    const { chart, board } = this;

                    const table = this.store && this.store.table;

                    if (board && table) {
                        const { cursor } = board;

                        this.on('afterRender', (): void => {
                            if (chart && chart.series) {
                                chart.series.forEach((series): void => {
                                    series.update({
                                        point: {
                                            events: {
                                                // emit table cursor
                                                mouseOver: function (): void {
                                                    cursor.emitCursor(table, {
                                                        type: 'position',
                                                        row: this.x,
                                                        column: series.name,
                                                        state: 'point.mouseOver'
                                                    });
                                                },
                                                mouseOut: function (): void {
                                                    cursor.emitCursor(table, {
                                                        type: 'position',
                                                        row: this.x,
                                                        column: series.name,
                                                        state: 'point.mouseOut'
                                                    });
                                                }
                                            }
                                        }
                                    });
                                });
                            }
                        });


                        // Return function that handles cleanup
                        return function (): void {
                            if (chart && chart.series) {
                                chart.series.forEach((series): void => {
                                    series.update({
                                        point: {
                                            events: {
                                                mouseOver: void 0,
                                                mouseOut: void 0
                                            }
                                        }
                                    });
                                });

                            }
                        };
                    }
                }
            }
        ],
        seriesVisibilityEmitter: [
            'seriesVisibilityEmitter',
            function (this: ComponentTypes): Function | void {
                if (this instanceof (HighchartsComponent || window.HighchartsComponent)) {
                    const component = this;
                    return addEvent(component.chart, 'redraw', function (): void {
                        const { chart, store, id, activeGroup } = component;
                        if (
                            store && // has a store
                            chart &&
                            chart.hasRendered
                        ) {
                            const { series } = chart;
                            const visibilityMap: Record<string, boolean> = {};
                            for (let i = 0; i < series.length; i++) {
                                const seriesID = series[i].options.id;
                                if (seriesID) {
                                    visibilityMap[seriesID] = series[i].visible;
                                }
                            }
                            if (Object.keys(visibilityMap).length && activeGroup) {
                                activeGroup.getSharedState().setColumnVisibility(visibilityMap, {
                                    sender: id
                                });
                            }

                        }
                    });
                }
            }
        ],
        panEmitter: [
            'panEmitter',
            function (this: ComponentTypes): Function | void {
                if (this instanceof (HighchartsComponent || window.HighchartsComponent)) {
                    const { store, chart, id } = this;
                    if (store && chart) {
                        const ticks: number[] = [];
                        return addEvent(chart, 'pan', (): void => {
                            const groups = ComponentGroup.getGroupsFromComponent(id);
                            // Cancel previous ticks
                            while (ticks.length) {
                                const tick = ticks.pop();
                                if (tick) {
                                    clearTimeout(tick);
                                }
                            }

                            ticks.push(setTimeout((): void => {
                                const minMaxes = getAxisMinMaxMap(chart);
                                minMaxes.forEach((minMax): void => {
                                    const { coll, extremes } = minMax;
                                    groups.forEach((group): void => {
                                        group.getSharedState().setSelection(
                                            { [coll]: extremes },
                                            false,
                                            {
                                                sender: id
                                            }
                                        );
                                    });
                                });
                            }, 100));
                        });
                    }
                }
            }
        ],
        selectionEmitter: [
            'selectionEmitter',
            function (this: ComponentTypes): Function | void {
                if (this instanceof (HighchartsComponent || window.HighchartsComponent)) {
                    const {
                        chart,
                        board,
                        store
                    } = this;

                    if (store && chart && board) {
                        this.on('afterRender', (): void => {
                            const { cursor } = board;
                            chart.axes.forEach((axis): void => {
                                axis.update({
                                    events: {
                                        afterSetExtremes: (e): void => {
                                            cursor.emitCursor(store.table, {
                                                type: 'range',
                                                state: `${(e.target as any).coll}.extremes`,
                                                firstRow: e.min || e.dataMin,
                                                lastRow: e.max || e.dataMax
                                            },
                                            e as any
                                            );
                                        }
                                    }

                                },
                                false
                                );
                            });
                        });
                    }
                }
            }
        ]
    },
    handlers: {
        seriesVisibilityHandler: [
            'seriesVisibilityHandler',
            'afterColumnVisibilityChange',
            function (this: HighchartsComponent, e: SharedState.ColumnVisibilityEvent): void {
                const { chart, store } = this;
                if (store && chart) {
                    chart.series.forEach((series): void => {
                        const seriesID = series.options.id;
                        if (seriesID) {
                            series.setVisible(e.visibilityMap[seriesID], false);
                        }
                    });
                }
            }
        ],
        tooltipHandler:
            function (this: HighchartsComponent): void {
                const { chart, board } = this;
                const table = this.store && this.store.table;
                if (board && table) {
                    const { cursor } = board;
                    if (cursor) {
                        cursor.addListener(table.id, 'point.mouseOver', (e): void => {
                            if (chart && chart.series.length) {
                                const cursor = e.cursor;
                                if (cursor.type === 'position') {
                                    const [series] = chart.series.length > 1 && cursor.column ?
                                        chart.series.filter((series): boolean => series.name === cursor.column) :
                                        chart.series;

                                    if (series && series.visible && cursor.row !== void 0) {
                                        const point = findMatchingPoint(chart, { series, x: cursor.row });

                                        if (point) {
                                            chart.tooltip && chart.tooltip.refresh(point);
                                        }
                                    }
                                }
                            }
                        });

                        cursor.addListener(table.id, 'point.mouseOut', (): void => {
                            if (chart && chart.series.length) {
                                chart.tooltip && chart.tooltip.hide();
                            }
                        });
                    }
                }
            },
        selectionHandler:
            function (this: HighchartsComponent): void {
                const { chart, board, store } = this;
                if (chart && board && store && store.table) {
                    const { cursor } = board;
                    // TODO: zAxis?
                    // TODO: yAxis neeeds some restrictions
                    ['xAxis', 'yAxis'].forEach((dimension): void => {
                        // TODO: handle zoom button?
                        cursor.addListener(store.table.id, `${dimension}.extremes`, (e): void => {
                            const { cursor, event } = e;

                            if (cursor.type === 'range') {
                                const { firstRow: min, lastRow: max } = cursor;
                                const eventTarget = event && event.target as unknown as Axis;
                                if (eventTarget) {
                                    chart.axes
                                        .filter((axis): boolean =>
                                            axis !== eventTarget &&
                                            axis.coll === eventTarget.coll
                                        )
                                        .forEach((axis): void => {
                                            axis.setExtremes(
                                                min,
                                                max
                                            );
                                        });
                                }
                            }
                        });
                    });
                }
            }
    }
};

const defaults: Sync.OptionsRecord = {
    panning: { emitter: configs.emitters.panEmitter, handler: configs.handlers.selectionHandler },
    selection: { emitter: configs.emitters.selectionEmitter, handler: configs.handlers.selectionHandler },
    tooltip: { emitter: configs.emitters.tooltipEmitter, handler: configs.handlers.tooltipHandler },
    visibility: { emitter: configs.emitters.seriesVisibilityEmitter, handler: configs.handlers.seriesVisibilityHandler }
};

export default defaults;
