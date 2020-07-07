def merge_sort(unsorted_list):
    if len(unsorted_list) < 2:
        return unsorted_list
    middle = int(len(unsorted_list)/2)
    left = unsorted_list[:middle]
    right = unsorted_list[middle:]
    return merge(merge_sort(left), merge_sort(right))


def merge(left, right):
    sorted = []
    while len(left) > 0 and len(right) > 0:
        if left[0] > right[0]:
            sorted.append(right.pop(0))
        else:
            sorted.append(left.pop(0))
    return sorted + left + right
