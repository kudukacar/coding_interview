def quick_sort(unsorted_list):
    if len(unsorted_list) < 2:
        return unsorted_list
    comparator = unsorted_list.pop(0)
    left = list(filter(lambda x: x < comparator, unsorted_list))
    right = list(filter(lambda x: x >= comparator, unsorted_list))
    return quick_sort(left) + [comparator] + quick_sort(right)
