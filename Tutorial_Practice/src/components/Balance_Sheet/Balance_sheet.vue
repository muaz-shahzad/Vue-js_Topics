<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Financial Account</th>
                    <th>Level</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="item in flattenBalanceSheetData" :key="item.id">
                    <tr>
                        <td>
                            <span v-if="hasChildren(item)" @click="toggleCollapse(item)"
                                :class="{ 'expand-icon': isCollapsed(item), 'collapse-icon': !isCollapsed(item) }"></span>
                        </td>
                        <td :style="{ paddingLeft: getIndentation(item.indentation) }">
                            {{ item.Financial_Account }}
                        </td>
                        <td>{{ item.Level }}</td>
                        <td>{{ item.Link }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            balanceSheetData: [
                {
                    id: 1,
                    Financial_Account: "Parent",
                    Level: 1,
                    Link: "link",
                    children: [
                        {
                            id: 2,
                            Financial_Account: "Assets",
                            Level: 2,
                            Link: "link",
                            children: [
                                {
                                    id: 3,
                                    Financial_Account: "Head Office",
                                    Level: 3,
                                    Link: "link",
                                    children: [
                                        {
                                            id: 4,
                                            Financial_Account: "Property & Equipment",
                                            Level: 5,
                                            Link: "link",
                                            children: [
                                                {
                                                    id: 5,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                                {
                                                    id: 6,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                                {
                                                    id: 7,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                            ],
                                        },
                                        {
                                            id: 4,
                                            Financial_Account: "Long Term Deposit",
                                            Level: 5,
                                            Link: "link",
                                            children: [
                                                {
                                                    id: 5,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                                {
                                                    id: 6,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                                {
                                                    id: 7,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                            ],
                                        },
                                        {
                                            id: 4,
                                            Financial_Account: "Advances, Deposit & Repayments",
                                            Level: 5,
                                            Link: "link",
                                            children: [
                                                {
                                                    id: 5,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                                {
                                                    id: 6,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                                {
                                                    id: 7,
                                                    Financial_Account: "Workshop &",
                                                    Level: 8,
                                                    Link: "link",
                                                    children: [],
                                                },
                                            ],
                                        },

                                    ],

                                },
                            ],

                        },
                        {
                            id: 3,
                            Financial_Account: "Parts",
                            Level: 2,
                            Link: "link",
                            children: [
                                {
                                    id: 4,
                                    Financial_Account: "Property & Equipment",
                                    Level: 4,
                                    Link: "link",
                                    children: [
                                        {
                                            id: 5,
                                            Financial_Account: "Workshop &",
                                            Level: 8,
                                            Link: "link",
                                            children: [],
                                        },
                                        {
                                            id: 6,
                                            Financial_Account: "Workshop &",
                                            Level: 8,
                                            Link: "link",
                                            children: [],
                                        },
                                        {
                                            id: 7,
                                            Financial_Account: "Workshop &",
                                            Level: 8,
                                            Link: "link",
                                            children: [],
                                        },
                                    ],
                                },
                            ],

                        },
                    ],
                },
            ],
            collapsedItems: []
        };
    },

    computed: {
        flattenBalanceSheetData() {
            const flattenData = [];

            const traverse = (item, indentation = 0) => {
                item.indentation = indentation;
                flattenData.push(item);
                if (!this.isCollapsed(item) && item.children && item.children.length > 0) {
                    for (const child of item.children) {
                        traverse(child, indentation + 1);
                    }
                }
            };

            for (const item of this.balanceSheetData) {
                traverse(item);
            }

            return flattenData;
        },
    },
    methods: {
        getIndentation(level) {
            const indentSize = 20; // You can adjust this value to change the indentation size
            const indentation = level * indentSize;
            return `${indentation}px`;
        },
        hasChildren(item) {
            return item.children && item.children.length > 0;
        },
        isCollapsed(item) {
            return this.collapsedItems.includes(item);
        },
        toggleCollapse(item) {
            if (this.isCollapsed(item)) {
                this.collapsedItems = this.collapsedItems.filter((i) => i !== item);
            } else {
                this.collapsedItems.push(item);
            }
        },
    },
};
</script>
  
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 8px;
    border: 1px solid #ccc;
}

th {
    background-color: #f2f2f2;
}

.expand-icon:before,
.collapse-icon:before {
    content: "+";
    cursor: pointer;
}

.collapse-icon:before {
    content: "-";
}

.expand-icon:before {
    transform: rotate(-45deg);
}

.collapse-icon:before {
    transform: rotate(0);
}

td:first-child {
    width: 20px;
    text-align: center;
}

.expand-icon,
.collapse-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    line-height: 14px;
    font-size: 12px;
    color: #555;
    cursor: pointer;
}
</style>
  