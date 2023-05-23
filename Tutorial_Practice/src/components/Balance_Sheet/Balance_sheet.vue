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
                    <tr :class="{ 'parent-row': hasIcon(item) }">
                        <td>
                            <span v-if="hasChildren(item)" @click="toggleCollapse(item)" :class="{
                                    'expand-icon': isCollapsed(item),
                                    'collapse-icon': !isCollapsed(item),
                                }"></span>
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
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to generate a random integer within a specific range
function generateRandomBalanceSheetData() {
    const levels = [1, 2, 3, 4, 5, 6, 7, 8];
    const parentNames = ["Parent", "Assets", "Head Office", "Property & Equipment", "Long Term Deposit", "Advances, Deposit & Repayments", "Parts"];

    function generateRandomChildren(parent, maxDepth, currentDepth = 1) {
        if (currentDepth >= maxDepth) {
            parent.children = [];
            return;
        }

        const numChildren = getRandomInt(0, 3);

        parent.children = [];
        for (let i = 0; i < numChildren; i++) {
            const child = {
                id: parent.id * 10 + i,
                Financial_Account: parentNames[getRandomInt(0, parentNames.length - 1)],
                Level: levels[levels.indexOf(parent.Level) + 1],
                Link: "link",
                children: [],
            };
            parent.children.push(child);
            generateRandomChildren(child, maxDepth, currentDepth + 1);
        }
    }

    const rootParent = {
        id: 1,
        Financial_Account: "Parent",
        Level: 1,
        Link: "link",
        children: [],
    };

    generateRandomChildren(rootParent, 4);

    return [rootParent];
}

export default {
    data() {
        return {
            balanceSheetData: generateRandomBalanceSheetData(), // Generate random balance sheet data
            collapsedItems: [],
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
        hasIcon() {
            return (item) => this.hasChildren(item);
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
        isParentRow(item) {
            return item.Level === 1; // Check if the item is a parent row based on its level
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

.parent-row {
    background-color: #f8f8f8;
    /* Light grey background color for parent rows */
}
</style>
  