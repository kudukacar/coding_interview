def binary_search(sorted_list, search):
    length = len(sorted_list)
    if length < 1:
        return False
    mid_index = int(length/2)
    mid_value = sorted_list[mid_index]
    right = sorted_list[mid_index + 1:]
    left = sorted_list[:mid_index]
    if mid_value == search:
        return mid_index
    elif mid_value > search:
        return binary_search(left, search)
    else:
        result = binary_search(right, search)
        if result != False:
            return result + mid_index + 1
        else:
            return result
